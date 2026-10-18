import { Link } from 'react-router';
import estils from './NoTrobada.module.css';

export default function NoTrobada() {
  return (
    <div className={estils.container}>
      <h1 className={estils.codi}>404</h1>
      <h2 className={estils.titol}>Pàgina no trobada</h2>
      <p className={estils.text}>
        Aquesta adreça no existeix al nostre servidor.
      </p>
      <Link to="/" className={estils.enllac}>
        Tornar a l'inici
      </Link>
    </div>
  );
}
