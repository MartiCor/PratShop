import { Link } from 'react-router';
import SelectorQuantitat from '../components/SelectorQuantitat';
import Boto from '../components/Boto';
import type { LiniaCarro } from '../tipus';
import estils from './Carro.module.css';

type Props = {
  carro: LiniaCarro[];
  onCanviaUnitats: (id: string, novesUnitats: number) => void;
  onEsborra: (id: string) => void;
  onBuida: () => void;
};

export default function Carro({ carro, onCanviaUnitats, onEsborra, onBuida }: Props) {
  // Total calculat (estat derivat)
  const total = carro.reduce(
    (suma, linia) => suma + linia.producte.preu * linia.unitats,
    0,
  );

  if (carro.length === 0) {
    return (
      <div className={estils.container}>
        <div className={estils.buit}>
          <h2>El teu carret és buit</h2>
          <p>Encara no has afegit cap producte.</p>
          <Link to="/cataleg">
            <Boto variant="primari">Veure catàleg</Boto>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={estils.container}>
      <h1 className={estils.titol}>El teu carret de compra</h1>

      <table className={estils.taula}>
        <thead>
          <tr>
            <th>Producte</th>
            <th>Preu</th>
            <th>Unitats</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carro.map((linia) => (
            <tr key={linia.producte.id}>
              <td>
                <div className={estils.producteFila}>
                  <img
                    src={linia.producte.imatge}
                    alt={linia.producte.nom}
                    className={estils.miniFoto}
                  />
                  <span>{linia.producte.nom}</span>
                </div>
              </td>
              <td>{linia.producte.preu.toFixed(2)} €</td>
              <td>
                <SelectorQuantitat
                  valor={linia.unitats}
                  minim={1}
                  maxim={linia.producte.estoc}
                  onCanvi={(nou) => onCanviaUnitats(linia.producte.id, nou)}
                />
              </td>
              <td className={estils.subtotal}>
                {(linia.producte.preu * linia.unitats).toFixed(2)} €
              </td>
              <td>
                <button
                  type="button"
                  className={estils.botoTreure}
                  onClick={() => onEsborra(linia.producte.id)}
                  aria-label="Eliminar producte"
                >
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={estils.peuCarro}>
        <Boto variant="perill" onClick={onBuida}>
          Buidar carret
        </Boto>

        <div className={estils.totalBloc}>
          <span className={estils.totalText}>
            Total: <strong>{total.toFixed(2)} €</strong>
          </span>
          <Link to="/compra">
            <Boto variant="primari">Tramitar comanda →</Boto>
          </Link>
        </div>
      </div>
    </div>
  );
}
