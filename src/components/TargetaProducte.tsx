import { Link } from 'react-router';
import clsx from 'clsx';
import type { Producte } from '../tipus';
import Boto from './Boto';
import estils from './TargetaProducte.module.css';

type Props = {
  producte: Producte;
  onAfegir: (producte: Producte) => void;
};

export default function TargetaProducte({ producte, onAfegir }: Props) {
  const esgotat = producte.estoc === 0;

  return (
    <article className={clsx(estils.targeta, esgotat && estils.esgotada)}>
      <Link to={`/producte/${producte.id}`} className={estils.imatgeLink}>
        <img
          src={producte.imatge}
          alt={producte.nom}
          className={estils.foto}
          loading="lazy"
        />
        {esgotat && <span className={estils.etiquetaEsgotat}>Esgotat</span>}
      </Link>

      <div className={estils.cos}>
        <span className={estils.categoria}>{producte.categoria}</span>
        <Link to={`/producte/${producte.id}`} className={estils.titolLink}>
          <h3 className={estils.nom}>{producte.nom}</h3>
        </Link>
        <p className={estils.preu}>{producte.preu.toFixed(2)} €</p>

        <p className={esgotat ? estils.senseEstoc : estils.estoc}>
          {esgotat ? 'Sense estoc' : `${producte.estoc} disponibles`}
        </p>

        <Boto
          variant={esgotat ? 'secundari' : 'primari'}
          disabled={esgotat}
          onClick={() => onAfegir(producte)}
          className={estils.boto}
        >
          {esgotat ? 'Esgotat' : 'Afegir al carret'}
        </Boto>
      </div>
    </article>
  );
}
