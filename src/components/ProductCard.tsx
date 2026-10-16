import type { Product } from '../types/product';
import styles from './ProductCard.module.css';

type Props = {
  producte: Product;
  onAfegir: (producte: Product) => void;
};

export default function TargetaProducte({ producte, onAfegir }: Props) {
  // Un booleà calculat, no un estat: surt de les dades del producte.
  const exhaurit = producte.estoc === 0;

  return (
    <article className={`${styles.targeta} targeta`} aria-label={producte.nom}>
      {/* Foto del producte */}
      <div className={styles.fotoWrapper}>
        <img
          src={producte.imatge}
          alt={producte.nom}
          className={`${styles.foto} ${exhaurit ? styles.fotoExhaurit : ''}`}
          loading="lazy"
        />
      </div>

      {/* Contingut */}
      <div className={styles.contingut}>
        <h3 className={styles.nom}>{producte.nom}</h3>
        <p className={styles.descripcio}>{producte.descripcio}</p>
        <p className={styles.preu}>{producte.preu.toFixed(2)} €</p>
        <p className={`${styles.estoc} ${exhaurit ? styles.senseEstoc : ''}`}>
          {exhaurit ? 'Sense estoc' : `${producte.estoc} unitats`}
        </p>

        {/* Li passem una funció que crida l'altra amb arguments, no la crida directa */}
        <button
          type="button"
          disabled={exhaurit}
          onClick={() => onAfegir(producte)}
          className={styles.boto}
        >
          {exhaurit ? 'Exhaurit' : 'Afegeix al carro'}
        </button>
      </div>
    </article>
  );
}

export const ProductCard = TargetaProducte;
