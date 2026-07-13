export interface GameItem {
  id?: string;
  name: string;
  nameZh?: string;
  category: string;
  sect?: string;
  monPhai?: string;
  element?: string;
  itemType?: string;
  details: string;
  stats?: string[];
  tags?: string[];
  detail?: string;
  upgrade?: string;
  imageUrl?: string;
  icon?: string;
}

export type CategoryKey = 
  | 'noi-cong' 
  | 'dac-tinh' 
  | 'tuyet-ky' 
  | 'ky-nang-giang-ho' 
  | 'ky-nang-mon-phai';
