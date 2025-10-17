// Import MapLibre types
import type { Map as MapLibreMap } from 'maplibre-gl';

// Map-related types
export interface MapViewState {
  longitude: number;
  latitude: number;
  zoom: number;
  bearing: number;
  pitch: number;
}

export interface MapStyleSpec {
  version: number;
  name?: string;
  metadata?: Record<string, unknown>;
  sources: Record<string, SourceSpecification>;
  layers: LayerSpecification[];
  sprite?: string;
  glyphs?: string;
  light?: LightSpecification;
  terrain?: TerrainSpecification;
}

export interface SourceSpecification {
  type: 'vector' | 'raster' | 'geojson' | 'image' | 'video' | 'canvas';
  url?: string;
  urls?: string[];
  tiles?: string[];
  scheme?: 'xyz' | 'tms';
  minzoom?: number;
  maxzoom?: number;
  attribution?: string;
  bounds?: [number, number, number, number];
  data?: GeoJSON.GeoJSON | string;
  lineMetrics?: boolean;
  generateId?: boolean;
  promoteId?: string | Record<string, string>;
  buffer?: number;
  tolerance?: number;
  cluster?: boolean;
  clusterRadius?: number;
  clusterMaxZoom?: number;
  clusterProperties?: Record<string, unknown>;
}

export interface LayerSpecification {
  id: string;
  type:
    | 'fill'
    | 'line'
    | 'symbol'
    | 'circle'
    | 'fill-extrusion'
    | 'raster'
    | 'background'
    | 'hillshade'
    | 'heatmap';
  source?: string;
  'source-layer'?: string;
  layout?: LayoutSpecification;
  paint?: PaintSpecification;
  filter?: FilterSpecification;
  minzoom?: number;
  maxzoom?: number;
  metadata?: Record<string, unknown>;
}

export interface LayoutSpecification {
  visibility?: 'visible' | 'none';
  [key: string]: unknown;
}

export interface PaintSpecification {
  [key: string]: unknown;
}

export type FilterSpecification =
  | ['==', string, unknown]
  | ['!=', string, unknown]
  | ['>', string, number]
  | ['>=', string, number]
  | ['<', string, number]
  | ['<=', string, number]
  | ['in', string, ...unknown[]]
  | ['!in', string, ...unknown[]]
  | ['has', string]
  | ['!has', string]
  | ['all', ...FilterSpecification[]]
  | ['any', ...FilterSpecification[]]
  | ['none', ...FilterSpecification[]]
  | boolean;

export interface LightSpecification {
  anchor?: 'map' | 'viewport';
  color?: string;
  intensity?: number;
  position?: [number, number, number];
}

export interface TerrainSpecification {
  source: string;
  exaggeration?: number;
}

// Map feature types
export interface MapFeature {
  id?: string | number;
  type: 'Feature';
  geometry: GeoJSON.Geometry;
  properties: Record<string, unknown>;
}

export interface MapMarker {
  id: string;
  longitude: number;
  latitude: number;
  title?: string;
  description?: string;
  color?: string;
  size?: number;
  icon?: string;
}

export interface MapLayer {
  id: string;
  type: LayerSpecification['type'];
  source: SourceSpecification;
  paint?: PaintSpecification;
  layout?: LayoutSpecification;
  filter?: FilterSpecification;
  minzoom?: number;
  maxzoom?: number;
  visible: boolean;
  order?: number;
}

// Search types
export interface SearchResult {
  id: string;
  place_name: string;
  place_type: string[];
  relevance: number;
  address?: string;
  center: [number, number];
  geometry: GeoJSON.Point;
  context?: Array<{
    id: string;
    text: string;
    short_code?: string;
  }>;
  bbox?: [number, number, number, number];
}

// User types
export interface User {
  id: string;
  name?: string;
  email: string;
  image?: string;
  username?: string;
  bio?: string;
  location?: string;
  website?: string;
  theme: 'light' | 'dark' | 'cyberpunk';
  language: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSession {
  user: User;
  expires: string;
}

// Map data types
export interface MapData {
  id: string;
  title: string;
  description?: string;
  latitude: number;
  longitude: number;
  zoom: number;
  bearing: number;
  pitch: number;
  style: string;
  is3D: boolean;
  isVREnabled: boolean;
  isPublic: boolean;
  tags: string[];
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  author?: User;
}

export interface MapReview {
  id: string;
  userId: string;
  mapId: string;
  rating: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
}

export interface MapFavorite {
  id: string;
  userId: string;
  mapId: string;
  createdAt: Date;
  user?: User;
  map?: MapData;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T = unknown> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
  name?: string;
  username?: string;
}

export interface MapCreateForm {
  title: string;
  description?: string;
  latitude: number;
  longitude: number;
  zoom: number;
  style: string;
  is3D: boolean;
  isVREnabled: boolean;
  isPublic: boolean;
  tags: string[];
}

// Component props types
export interface MapComponentProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  interactive?: boolean;
  showControls?: boolean;
  onMapLoad?: (map: MapLibreMap) => void;
  onMapError?: (error: Error) => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}

// Error types
export interface AppError extends Error {
  code?: string;
  status?: number;
}

// WebXR/VR types
export interface VRSession {
  supported: boolean;
  active: boolean;
  session?: VRSession;
}

export interface VRController {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number];
}
