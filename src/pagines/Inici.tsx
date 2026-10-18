import { Link } from 'react-router';
import { PRODUCTES } from '../dades/productes';
import TargetaProducte from '../components/TargetaProducte';
import type { Producte } from '../tipus';
import './Inici.css';

type Props = {
  onAfegir: (producte: Producte) => void;
};

export default function Inici({ onAfegir }: Props) {
  const destacats = PRODUCTES.filter((p) => p.destacat).slice(0, 4);

  return (
    <div className="container">
      {/* Secció principal de benvinguda */}
      <section className="hero">
        <span className="heroTag">Projecte 2n DAM</span>
        <h1 className="heroTitle">Benvinguts a PratShop</h1>
        <p className="heroText">
          Botiga online de roba i complements. Navega pel catàleg, afegeix peces
          a la cistella i fes la teva compra fàcilment.
        </p>
        <Link to="/cataleg" className="heroButton">
          Veure tot el catàleg →
        </Link>
      </section>

      {/* Productes destacats */}
      <section className="seccio">
        <h2 className="seccioTitol">Productes destacats</h2>
        <div className="graella">
          {destacats.map((prod) => (
            <TargetaProducte key={prod.id} producte={prod} onAfegir={onAfegir} />
          ))}
        </div>
      </section>
    </div>
  );
}
