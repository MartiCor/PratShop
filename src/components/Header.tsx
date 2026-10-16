import React from 'react';
import styles from './Header.module.css';

export type HeaderProps = {
  unitatsAlCarro?: number;
  unitats?: number;
  onObrirCarret?: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  unitatsAlCarro,
  unitats: unitatsProp,
  onObrirCarret,
}) => {
  const totalUnitats = unitatsProp ?? unitatsAlCarro ?? 0;

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Brand Logo */}
        <a href="#" className={styles.brandLogo}>
          <span>PRATSHOP</span>
          <span className={styles.brandDot}></span>
        </a>

        {/* Clean Direct Navigation */}
        <nav className={styles.navigation}>
          <a href="#" className={styles.navLink}>
            Inicio
          </a>
          <a href="#" className={styles.navLinkActive}>
            Catàleg
          </a>
          <a
            href="#carret"
            className={styles.cartButton}
            onClick={(e) => {
              if (onObrirCarret) {
                e.preventDefault();
                onObrirCarret();
              }
            }}
          >
            <span className={`material-symbols-outlined ${styles.cartIcon}`}>
              shopping_bag
            </span>
            <span className={styles.cartLabel}>Carret</span>
            {/* Renderitzat condicional: el globus només surt si hi ha alguna unitat */}
            {totalUnitats > 0 && (
              <span className={styles.cartCount}>{totalUnitats}</span>
            )}
          </a>
        </nav>
      </div>
    </header>
  );
};

export const Capcalera = Header;
export default Header;
