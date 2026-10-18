// Tipus del domini de l'aplicació PratShop (sense cap `any`)

export type Categoria =
  | 'abrics'
  | 'camises'
  | 'jerseys'
  | 'pantalons'
  | 'complements';

export type CategoryKey = 'all' | Categoria;

export interface Producte {
  id: string;
  nom: string;
  categoria: Categoria;
  preu: number;
  descripcio: string;
  estoc: number;
  hayStock: boolean;
  imatge: string;
  destacat?: boolean;
}

// Una línia del carro: el producte i quantes unitats se'n volen
export interface LiniaCarro {
  producte: Producte;
  unitats: number;
}

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest';

export type MetodePagament = 'targeta' | 'bizum' | 'transferencia';

export interface DadesCompra {
  nom: string;
  correu: string;
  adreca: string;
  codiPostal: string;
  metodePagament: MetodePagament;
  acceptaCondicions: boolean;
}

export interface ErrorsCompra {
  nom?: string;
  correu?: string;
  adreca?: string;
  codiPostal?: string;
  metodePagament?: string;
  acceptaCondicions?: string;
}
