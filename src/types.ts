export interface GameItem {
  id: string;
  name: string;
  nameZh?: string;
  category: string;
  sect?: string;
  element?: string;
  itemType?: string;
  details: string;
  imageUrl?: string;
  icon?: string;
}

export type CategoryKey = 
  | 'noi-cong' 
  | 'dac-tinh' 
  | 'tuyet-ky' 
  | 'ky-nang-giang-ho' 
  | 'ky-nang-mon-phai';
