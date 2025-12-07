import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Industry {
  id: string;
  name: string;
  label: string;
  image: string;
  description: string;
  insights: string[];
}

export enum IndustryType {
  RAIL = 'RAIL',
  ROADS = 'ROADS',
  AIRPORTS = 'AIRPORTS',
  CITIES = 'CITIES'
}