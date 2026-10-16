export interface Product {
  id: string;
  nom: string;
  categoria: string;
  preu: number;
  descripcio: string;
  estoc: number;
  hayStock: boolean;
  imatge: string;
}

// Una línia del carro: el producte i quantes unitats se'n volen.
export type LiniaCarro = {
  producte: Product;
  unitats: number;
};

export type CategoryKey = 'all' | 'abrics' | 'camises' | 'pantalons';

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest';
