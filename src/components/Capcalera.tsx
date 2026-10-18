import { NavLink } from 'react-router';
import estils from './Capcalera.module.css';

type Props = {
  unitatsAlCarro: number;
};

export default function Capcalera({ unitatsAlCarro }: Props) {
  return (
    <header className={estils.header}>
      <div className={estils.container}>
        <NavLink to="/" className={estils.logo}>
          PRATSHOP
        </NavLink>

        <nav className={estils.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? estils.actiu : estils.enllac)}
          >
            Inici
          </NavLink>
          <NavLink
            to="/cataleg"
            className={({ isActive }) => (isActive ? estils.actiu : estils.enllac)}
          >
            Catàleg
          </NavLink>
          <NavLink to="/carro" className={estils.botoCarro}>
            🛒 Carret
            {unitatsAlCarro > 0 && (
              <span className={estils.globus}>{unitatsAlCarro}</span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
