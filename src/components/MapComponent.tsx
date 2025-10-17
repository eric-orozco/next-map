"use client";

import React, { useRef, useCallback } from "react";
import {
  Map,
  NavigationControl,
  GeolocateControl,
  ScaleControl,
  type MapRef,
  type MapEvent,
} from "react-map-gl/maplibre";

interface MapErrorEvent extends MapEvent {
  error?: Error | string
  message?: string
}
import { Box, Fab, useTheme } from "@mui/material";
import {
  ThreeDRotation,
  Fullscreen,
  MyLocation,
  ViewInAr,
} from "@mui/icons-material";
import { useMapStore } from "@/stores/mapStore";
import { useAppStore } from "@/stores/appStore";
import "maplibre-gl/dist/maplibre-gl.css";

interface MapComponentProps {
  readonly className?: string;
  readonly width?: string | number;
  readonly height?: string | number;
}

export default function MapComponent({
  className = "",
  width = "100%",
  height = "100vh",
}: MapComponentProps) {
  const theme = useTheme();
  const mapRef = useRef<MapRef>(null);

  const {
    viewState,
    setViewState,
    mapStyle,
    is3DEnabled,
    setIs3DEnabled,
    isVREnabled,
    setIsVREnabled,
    setMapInstance,
    showControls,
    isMapLoading,
    setIsMapLoading,
    setMapError,
    markers,
  } = useMapStore();

  const { preferences } = useAppStore();

  const onMapLoad = useCallback(
    (event: MapEvent) => {
      const map = event.target;
      setMapInstance(map);
      setIsMapLoading(false);

      // Add 3D terrain if enabled
      if (is3DEnabled) {
        map.addSource("mapbox-dem", {
          type: "raster-dem",
          url: "mapbox://mapbox.mapbox-terrain-dem-v1",
          tileSize: 512,
          maxzoom: 14,
        });
        map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
      }
    },
    [setMapInstance, setIsMapLoading, is3DEnabled]
  );

  const onMapError = useCallback(
    (event: MapEvent) => {
      const errorEvent = event as MapErrorEvent;
      console.error("Map error details:", {
        type: event.type,
        target: event.target,
        originalEvent: event.originalEvent,
        error: errorEvent.error,
        message: errorEvent.message
      });
      
      const errorMessage = errorEvent.message || 
                          (errorEvent.error instanceof Error ? errorEvent.error.message : String(errorEvent.error)) ||
                          "Map failed to load";
      setMapError(errorMessage);
      setIsMapLoading(false);
    },
    [setMapError, setIsMapLoading]
  );

  const handleToggle3D = () => {
    const newIs3D = !is3DEnabled;
    setIs3DEnabled(newIs3D);

    if (mapRef.current) {
      const map = mapRef.current.getMap();
      if (newIs3D) {
        // Enable 3D perspective view
        // Note: True 3D terrain requires vector tiles and DEM data
        // For now, we provide 3D perspective of the 2D map
        map.easeTo({ 
          pitch: 60, 
          bearing: -45, 
          duration: 1000 
        });
        
        console.log("3D view enabled - perspective mode");
      } else {
        // Disable 3D - reset to flat view
        map.easeTo({ 
          pitch: 0, 
          bearing: 0, 
          duration: 1000 
        });
        
        console.log("3D view disabled - flat mode");
      }
    }
  };

  const handleToggleVR = () => {
    setIsVREnabled(!isVREnabled);
    // VR implementation would go here
    // This would typically involve WebXR APIs
    console.log("VR mode toggled:", !isVREnabled);
  };

  const handleFullscreen = () => {
    if (mapRef.current) {
      const mapContainer = mapRef.current.getContainer();
      if (mapContainer?.requestFullscreen) {
        mapContainer.requestFullscreen();
      }
    }
  };

  const handleResetView = () => {
    if (mapRef.current) {
      const map = mapRef.current.getMap();
      map.flyTo({
        center: [viewState.longitude, viewState.latitude],
        zoom: 10,
        bearing: 0,
        pitch: 0,
        essential: true,
      });
    }
  };

  return (
    <Box
      className={className}
      sx={{
        position: "relative",
        width,
        height,
        "& .maplibregl-canvas": {
          borderRadius: theme.shape.borderRadius,
        },
      }}
    >
      <Map
        ref={mapRef}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        onLoad={onMapLoad}
        onError={onMapError}
        mapStyle={mapStyle}
        style={{ width: "100%", height: "100%" }}
        maxZoom={20}
        minZoom={0}
        attributionControl={false}
        hash={true}
      >
        {/* Navigation Controls */}
        {showControls.navigation && (
          <NavigationControl position="top-right" showCompass showZoom />
        )}

        {/* Geolocate Control */}
        {showControls.geolocate && preferences.enableGeolocation && (
          <GeolocateControl position="top-right" trackUserLocation />
        )}

        {/* Scale Control */}
        {showControls.scale && (
          <ScaleControl position="bottom-left" maxWidth={100} unit="metric" />
        )}

        {/* Custom markers would be rendered here */}
        {markers.map((marker) => (
          <div key={marker.id}>{/* Marker implementation */}</div>
        ))}
      </Map>

      {/* Floating Action Buttons */}
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Fab
          size="medium"
          color={is3DEnabled ? "primary" : "default"}
          title={is3DEnabled ? "Disable 3D perspective" : "Enable 3D perspective"}
          onClick={handleToggle3D}
          aria-label="toggle 3D"
        >
          <ThreeDRotation />
        </Fab>

        {preferences.enableVR && (
          <Fab
            size="medium"
            color={isVREnabled ? "secondary" : "default"}
            onClick={handleToggleVR}
            aria-label="toggle VR"
          >
            <ViewInAr />
          </Fab>
        )}

        <Fab size="medium" onClick={handleFullscreen} aria-label="fullscreen">
          <Fullscreen />
        </Fab>

        <Fab size="medium" onClick={handleResetView} aria-label="reset view">
          <MyLocation />
        </Fab>
      </Box>

      {/* Loading overlay */}
      {isMapLoading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            zIndex: 1000,
          }}
        >
          Loading Map...
        </Box>
      )}
    </Box>
  );
}
