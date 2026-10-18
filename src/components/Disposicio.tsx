import { Outlet } from 'react-router';
import Capcalera from './Capcalera';
import './Disposicio.css';

type Props = {
  unitatsAlCarro: number;
};

export default function Disposicio({ unitatsAlCarro }: Props) {
  return (
    <div className="layout">
      <Capcalera unitatsAlCarro={unitatsAlCarro} />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
