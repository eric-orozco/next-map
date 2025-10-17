import { create } from 'zustand';
import { Map as MapLibreMap, type StyleSpecification } from 'maplibre-gl';
import type {
  MapViewState,
  MapLayer,
  MapMarker,
  SearchResult,
  MapFeature,
} from '@/types';

interface MapState {
  // Map Instance
  mapInstance: MapLibreMap | null;
  setMapInstance: (map: MapLibreMap | null) => void;

  // View State
  viewState: MapViewState;
  setViewState: (viewState: Partial<MapViewState>) => void;

  // Map Style
  mapStyle: string | StyleSpecification;
  setMapStyle: (style: string | StyleSpecification) => void;

  // 3D/VR Mode
  is3DEnabled: boolean;
  setIs3DEnabled: (enabled: boolean) => void;
  isVREnabled: boolean;
  setIsVREnabled: (enabled: boolean) => void;

  // Layers
  layers: MapLayer[];
  addLayer: (layer: MapLayer) => void;
  removeLayer: (layerId: string) => void;
  updateLayer: (layerId: string, updates: Partial<MapLayer>) => void;
  toggleLayerVisibility: (layerId: string) => void;

  // Markers
  markers: MapMarker[];
  addMarker: (marker: MapMarker) => void;
  removeMarker: (markerId: string) => void;
  updateMarker: (markerId: string, updates: Partial<MapMarker>) => void;

  // Interaction
  isInteractive: boolean;
  setIsInteractive: (interactive: boolean) => void;
  selectedFeature: MapFeature | null;
  setSelectedFeature: (feature: MapFeature | null) => void;

  // Loading/Error States
  isMapLoading: boolean;
  setIsMapLoading: (loading: boolean) => void;
  mapError: string | null;
  setMapError: (error: string | null) => void;

  // Controls
  showControls: {
    navigation: boolean;
    geolocate: boolean;
    scale: boolean;
    fullscreen: boolean;
  };
  updateControlsVisibility: (
    controls: Partial<MapState['showControls']>
  ) => void;

  // Search
  searchResults: SearchResult[];
  setSearchResults: (results: SearchResult[]) => void;

  // Utilities
  flyTo: (location: {
    longitude: number;
    latitude: number;
    zoom?: number;
  }) => void;
  fitBounds: (bounds: [[number, number], [number, number]]) => void;
  resetView: () => void;
}

const DEFAULT_VIEW_STATE: MapViewState = {
  longitude: -122.4,
  latitude: 37.8,
  zoom: 10,
  bearing: 0,
  pitch: 0,
};

export const useMapStore = create<MapState>((set, get) => ({
  // Map Instance
  mapInstance: null,
  setMapInstance: map => set({ mapInstance: map }),

  // View State
  viewState: DEFAULT_VIEW_STATE,
  setViewState: newViewState =>
    set(state => ({
      viewState: { ...state.viewState, ...newViewState },
    })),

  // Map Style
  mapStyle: {
    version: 8,
    sources: {
      'osm-tiles': {
        type: 'raster',
        tiles: [
          'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
          'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
          'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
        ],
        tileSize: 256,
        attribution: '© OpenStreetMap contributors',
      },
    },
    layers: [
      {
        id: 'osm-tiles',
        type: 'raster',
        source: 'osm-tiles',
      },
    ],
  } as StyleSpecification,
  setMapStyle: style => set({ mapStyle: style }),

  // 3D/VR Mode
  is3DEnabled: false,
  setIs3DEnabled: enabled => set({ is3DEnabled: enabled }),
  isVREnabled: false,
  setIsVREnabled: enabled => set({ isVREnabled: enabled }),

  // Layers
  layers: [],
  addLayer: layer =>
    set(state => ({
      layers: [...state.layers, layer],
    })),
  removeLayer: layerId =>
    set(state => ({
      layers: state.layers.filter(l => l.id !== layerId),
    })),
  updateLayer: (layerId, updates) =>
    set(state => ({
      layers: state.layers.map(l =>
        l.id === layerId ? { ...l, ...updates } : l
      ),
    })),
  toggleLayerVisibility: layerId =>
    set(state => ({
      layers: state.layers.map(l =>
        l.id === layerId ? { ...l, visible: !l.visible } : l
      ),
    })),

  // Markers
  markers: [],
  addMarker: marker =>
    set(state => ({
      markers: [...state.markers, marker],
    })),
  removeMarker: markerId =>
    set(state => ({
      markers: state.markers.filter(m => m.id !== markerId),
    })),
  updateMarker: (markerId, updates) =>
    set(state => ({
      markers: state.markers.map(m =>
        m.id === markerId ? { ...m, ...updates } : m
      ),
    })),

  // Interaction
  isInteractive: true,
  setIsInteractive: interactive => set({ isInteractive: interactive }),
  selectedFeature: null,
  setSelectedFeature: feature => set({ selectedFeature: feature }),

  // Loading/Error States
  isMapLoading: false,
  setIsMapLoading: loading => set({ isMapLoading: loading }),
  mapError: null,
  setMapError: error => set({ mapError: error }),

  // Controls
  showControls: {
    navigation: true,
    geolocate: true,
    scale: true,
    fullscreen: true,
  },
  updateControlsVisibility: controls =>
    set(state => ({
      showControls: { ...state.showControls, ...controls },
    })),

  // Search
  searchResults: [],
  setSearchResults: results => set({ searchResults: results }),

  // Utilities
  flyTo: location => {
    const { mapInstance } = get();
    if (mapInstance) {
      mapInstance.flyTo({
        center: [location.longitude, location.latitude],
        zoom: location.zoom || 14,
        essential: true,
      });
    }
    set(state => ({
      viewState: {
        ...state.viewState,
        longitude: location.longitude,
        latitude: location.latitude,
        zoom: location.zoom || state.viewState.zoom,
      },
    }));
  },

  fitBounds: bounds => {
    const { mapInstance } = get();
    if (mapInstance) {
      mapInstance.fitBounds(bounds, { padding: 50 });
    }
  },

  resetView: () => {
    set({ viewState: DEFAULT_VIEW_STATE });
    const { mapInstance } = get();
    if (mapInstance) {
      mapInstance.flyTo({
        center: [DEFAULT_VIEW_STATE.longitude, DEFAULT_VIEW_STATE.latitude],
        zoom: DEFAULT_VIEW_STATE.zoom,
        bearing: DEFAULT_VIEW_STATE.bearing,
        pitch: DEFAULT_VIEW_STATE.pitch,
        essential: true,
      });
    }
  },
}));
