import { Link } from 'react-router';
import './NoTrobada.css';

export default function NoTrobada() {
  return (
    <div className="container">
      <h1 className="codi">404</h1>
      <h2 className="titol">Pàgina no trobada</h2>
      <p className="text">
        Aquesta adreça no existeix al nostre servidor.
      </p>
      <Link to="/" className="enllac">
        Tornar a l'inici
      </Link>
    </div>
  );
}
