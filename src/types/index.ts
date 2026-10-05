export interface Hotspot {
  x: number; // porcentagem 0-100
  y: number; // porcentagem 0-100
  title: string;
  desc: string;
}

export interface MapCoords {
  x: number;
  y: number;
}

export interface Station {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  mapCoords: MapCoords;
  heading: number; // graus da bússola
  description: string;
  hotspots: Hotspot[];
}

export type PageRoute = 'home' | 'tour-villa-bella' | 'contato';

export type LightingMode = 'day' | 'golden' | 'night';

export type DisplayMode = 'walk' | 'video';

export interface BriefingData {
  nome: string;
  tipo: string;
  metragem: string;
  estilo: string;
  mensagem: string;
}
