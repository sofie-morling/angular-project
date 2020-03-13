export interface Movie {
  id: number;
  name: string;
  title: string;
  tagline?: string;
  overview?: string;
  cast?: any[];
  crew?: any[];
  release_date?: number;
  poster_path: ImageBitmap;
}