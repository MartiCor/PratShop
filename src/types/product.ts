export interface ProductBadge {
  text: string;
  variant?: 'primary' | 'muted';
}

export interface Product {
  id: string;
  name: string;
  category: string;
  precio: number;
  badge?: ProductBadge;
  hayStock: boolean;
  image: string;
}

// Una línia del carro: el producte i quantes unitats se'n volen.
export type LiniaCarro = {
  producte: Product;
  unitats: number;
};

export type CategoryKey = 'all' | 'abrics' | 'camises' | 'pantalons';

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest';
