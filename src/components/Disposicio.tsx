import { Outlet } from 'react-router';
import Capcalera from './Capcalera';
import estils from './Disposicio.module.css';

type Props = {
  unitatsAlCarro: number;
};

export default function Disposicio({ unitatsAlCarro }: Props) {
  return (
    <div className={estils.layout}>
      <Capcalera unitatsAlCarro={unitatsAlCarro} />
      <main className={estils.main}>
        <Outlet />
      </main>
    </div>
  );
}
