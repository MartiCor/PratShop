import React, { useState, useMemo, useEffect } from 'react';
import styles from './Cataleg.module.css';
import { INITIAL_PRODUCTS } from '../data/products';
import type { CategoryKey, LiniaCarro, Product, SortOption } from '../types/product';
import { TargetaProducte } from '../components';

// Clau amb què es desa el carro al navegador.
const CLAU = 'pratshop-carro';

// Lectura inicial: es fa un sol cop, dins d'un try/catch per si el text desat és corrupte.
function carregaCarro(): LiniaCarro[] {
  try {
    const desat = localStorage.getItem(CLAU);
    return desat ? (JSON.parse(desat) as LiniaCarro[]) : [];
  } catch {
    return [];
  }
}

type CatalegProps = {
  onAfegir?: (producte: Product) => void;
  unitatsAlCarro?: number;
};

export const Cataleg: React.FC<CatalegProps> = ({
  onAfegir: onAfegirProp,
  unitatsAlCarro: unitatsProp,
}) => {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  // L'estat del carro viu aquí (o al pare si es passa per propietats)
  const [carro, setCarro] = useState<LiniaCarro[]>(carregaCarro);


  // Cada cop que canvia el carro, es desa al navegador.
  useEffect(() => {
    localStorage.setItem(CLAU, JSON.stringify(carro));
  }, [carro]);

  function afegeix(producte: Product) {
    if (producte.estoc === 0) return;

    if (onAfegirProp) {
      onAfegirProp(producte);
      return;
    }

    setCarro((anterior) => {
      const jaHiEs = anterior.find((linia) => linia.producte.id === producte.id);
      if (jaHiEs) {
        return anterior.map((linia) =>
          linia.producte.id === producte.id
            ? { ...linia, unitats: linia.unitats + 1 }
            : linia,
        );
      }
      return [...anterior, { producte, unitats: 1 }];
    });
  }

  // Filter and sort items
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        if (selectedCategory !== 'all') {
          if (product.categoria !== selectedCategory) {
            return false;
          }
        }

        // Search query filter
        if (searchQuery.trim() !== '') {
          const query = searchQuery.toLowerCase();
          const matchName = product.nom.toLowerCase().includes(query);
          if (!matchName) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') {
          return a.preu - b.preu;
        }
        if (sortBy === 'price-desc') {
          return b.preu - a.preu;
        }
        if (sortBy === 'newest') {
          return Number(b.id) - Number(a.id);
        }
        return 0; // 'featured' keeps original order
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <div className={styles.pageWrapper}>
      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Hero / Headline & Search Bar */}
        <section className={styles.heroSection}>
          <div>
            <span className={styles.heroTag}>Col·lecció 2025</span>
            <h1 className={styles.heroTitle}>Catàleg de Peces</h1>
            <p className={styles.heroDescription}>
              Peces atemporals dissenyades amb patrons arquitectònics d'alta qualitat.
            </p>
          </div>

          {/* Compact Search Bar */}
          <div className={styles.searchBox}>
            <span className={`material-symbols-outlined ${styles.searchIcon}`}>
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cercar peces..."
              className={styles.searchInput}
            />
          </div>
        </section>

        {/* Category Pills & Count Toolbar */}
        <section className={styles.toolbar}>
          {/* Filter Categories */}
          <div className={styles.categoryGroup}>
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`${styles.categoryPill} ${
                selectedCategory === 'all' ? styles.categoryPillActive : ''
              }`}
            >
              Totes ({products.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('abrics')}
              className={`${styles.categoryPill} ${
                selectedCategory === 'abrics' ? styles.categoryPillActive : ''
              }`}
            >
              Abrics
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('camises')}
              className={`${styles.categoryPill} ${
                selectedCategory === 'camises' ? styles.categoryPillActive : ''
              }`}
            >
              Camises
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('pantalons')}
              className={`${styles.categoryPill} ${
                selectedCategory === 'pantalons' ? styles.categoryPillActive : ''
              }`}
            >
              Pantalons
            </button>
          </div>

          {/* Summary & Sort */}
          <div className={styles.toolbarRight}>
            <span className={styles.countText}>
              Mostrant <strong>{filteredProducts.length}</strong> de {products.length} peces
            </span>
            <div className={styles.sortContainer}>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className={styles.sortSelect}
              >
                <option value="featured">Destacats</option>
                <option value="price-asc">Preu: menor a major</option>
                <option value="price-desc">Preu: major a menor</option>
                <option value="newest">Més recents</option>
              </select>
              <span className={`material-symbols-outlined ${styles.sortSelectIcon}`}>
                expand_more
              </span>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={styles.productsGrid}>
            {filteredProducts.map((producte) => (
              <TargetaProducte
                key={producte.id}
                producte={producte}
                onAfegir={afegeix}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <span className={`material-symbols-outlined ${styles.emptyStateIcon}`}>
              search_off
            </span>
            <h2 className={styles.emptyStateTitle}>No s'han trobat peces</h2>
            <p className={styles.emptyStateText}>
              Prova de cercar amb uns altres termes o canvia de categoria.
            </p>
          </div>
        )}
      </main>

      {/* Clean Lightweight Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerBrand}>
            <span className={styles.footerBrandName}>ATELIER</span>
            <span className={styles.footerTagline}>
              — Disseny contemporani i artesania noble
            </span>
          </div>

          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>
              Privacitat
            </a>
            <a href="#" className={styles.footerLink}>
              Condicions
            </a>
            <a href="#" className={styles.footerLink}>
              Contacte
            </a>
          </div>

          <div className={styles.footerCopyright}>
            © 2025 ATELIER STUDIO. Tots els drets reservats.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cataleg;
