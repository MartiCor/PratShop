import { useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router';
import { PRODUCTES } from '../dades/productes';
import SelectorQuantitat from '../components/SelectorQuantitat';
import Boto from '../components/Boto';
import type { Producte } from '../tipus';
import estils from './DetallProducte.module.css';

type Props = {
  onAfegir: (producte: Producte, unitats?: number) => void;
};

export default function DetallProducte({ onAfegir }: Props) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const producte = PRODUCTES.find((p) => p.id === id);
  const [quantitat, setQuantitat] = useState<number>(1);
  const [afegit, setAfegit] = useState<boolean>(false);

  // Si l'id no existeix, anar a 404
  if (!producte) {
    return <Navigate to="/404" replace />;
  }

  const esgotat = producte.estoc === 0;

  function handleAfegir() {
    if (!producte || esgotat) return;
    onAfegir(producte, quantitat);
    setAfegit(true);
    setTimeout(() => setAfegit(false), 2000);
  }

  return (
    <div className={estils.container}>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className={estils.botoTorna}
      >
        ← Torna enrere
      </button>

      <div className={estils.grid}>
        <img
          src={producte.imatge}
          alt={producte.nom}
          className={`${estils.imatge} ${esgotat ? estils.esgotada : ''}`.trim()}
        />

        <div className={estils.detalls}>
          <span className={estils.categoria}>{producte.categoria}</span>
          <h1 className={estils.nom}>{producte.nom}</h1>
          <p className={estils.preu}>{producte.preu.toFixed(2)} €</p>
          <p className={estils.descripcio}>{producte.descripcio}</p>

          <p className={esgotat ? estils.textSenseEstoc : estils.textEstoc}>
            {esgotat ? 'Sense estoc disponible' : `${producte.estoc} unitats disponibles`}
          </p>

          {!esgotat && (
            <div className={estils.compraBloc}>
              <SelectorQuantitat
                valor={quantitat}
                minim={1}
                maxim={producte.estoc}
                onCanvi={(nou) => setQuantitat(nou)}
              />
              <Boto variant="primari" onClick={handleAfegir}>
                Afegir al carret
              </Boto>
            </div>
          )}

          {afegit && (
            <p className={estils.missatgeAfegit}>
              ✓ Afegit al carret correctament!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
