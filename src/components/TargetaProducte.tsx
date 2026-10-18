import { Link } from 'react-router';
import clsx from 'clsx';
import type { Producte } from '../tipus';
import Boto from './Boto';
import './TargetaProducte.css';

type Props = {
  producte: Producte;
  onAfegir: (producte: Producte) => void;
};

export default function TargetaProducte({ producte, onAfegir }: Props) {
  const esgotat = producte.estoc === 0;

  return (
    <article className={clsx('targeta', esgotat && 'esgotada')}>
      <Link to={`/producte/${producte.id}`} className="imatgeLink">
        <img
          src={producte.imatge}
          alt={producte.nom}
          className="foto"
          loading="lazy"
        />
        {esgotat && <span className="etiquetaEsgotat">Esgotat</span>}
      </Link>

      <div className="cos">
        <span className="categoria">{producte.categoria}</span>
        <Link to={`/producte/${producte.id}`} className="titolLink">
          <h3 className="nom">{producte.nom}</h3>
        </Link>
        <p className="preu">{producte.preu.toFixed(2)} €</p>

        <p className={esgotat ? 'senseEstoc' : 'estoc'}>
          {esgotat ? 'Sense estoc' : `${producte.estoc} disponibles`}
        </p>

        <Boto
          variant={esgotat ? 'secundari' : 'primari'}
          disabled={esgotat}
          onClick={() => onAfegir(producte)}
          className="boto"
        >
          {esgotat ? 'Esgotat' : 'Afegir al carret'}
        </Boto>
      </div>
    </article>
  );
}
