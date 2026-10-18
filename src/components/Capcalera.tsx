import { NavLink } from 'react-router';
import './Capcalera.css';

type Props = {
  unitatsAlCarro: number;
};

export default function Capcalera({ unitatsAlCarro }: Props) {
  return (
    <header className="header">
      <div className="container">
        <NavLink to="/" className="logo">
          PRATSHOP
        </NavLink>

        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'actiu' : 'enllac')}
          >
            Inici
          </NavLink>
          <NavLink
            to="/cataleg"
            className={({ isActive }) => (isActive ? 'actiu' : 'enllac')}
          >
            Catàleg
          </NavLink>
          <NavLink to="/carro" className="botoCarro">
            🛒 Carret
            {unitatsAlCarro > 0 && (
              <span className="globus">{unitatsAlCarro}</span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
