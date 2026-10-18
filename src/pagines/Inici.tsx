import { Link } from 'react-router';
import { PRODUCTES } from '../dades/productes';
import TargetaProducte from '../components/TargetaProducte';
import type { Producte } from '../tipus';
import estils from './Inici.module.css';

type Props = {
  onAfegir: (producte: Producte) => void;
};

export default function Inici({ onAfegir }: Props) {
  const destacats = PRODUCTES.filter((p) => p.destacat).slice(0, 4);

  return (
    <div className={estils.container}>
      {/* Secció principal de benvinguda */}
      <section className={estils.hero}>
        <span className={estils.heroTag}>Projecte 2n DAM</span>
        <h1 className={estils.heroTitle}>Benvinguts a PratShop</h1>
        <p className={estils.heroText}>
          Botiga online de roba i complements. Navega pel catàleg, afegeix peces
          a la cistella i fes la teva compra fàcilment.
        </p>
        <Link to="/cataleg" className={estils.heroButton}>
          Veure tot el catàleg →
        </Link>
      </section>

      {/* Productes destacats */}
      <section className={estils.seccio}>
        <h2 className={estils.seccioTitol}>Productes destacats</h2>
        <div className={estils.graella}>
          {destacats.map((prod) => (
            <TargetaProducte key={prod.id} producte={prod} onAfegir={onAfegir} />
          ))}
        </div>
      </section>
    </div>
  );
}
