import { useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router';
import { PRODUCTES } from '../dades/productes';
import SelectorQuantitat from '../components/SelectorQuantitat';
import Boto from '../components/Boto';
import type { Producte } from '../tipus';
import './DetallProducte.css';

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
    <div className="container">
      <button type="button" onClick={() => navigate(-1)} className="botoTorna">
        ← Torna enrere
      </button>

      <div className="grid">
        <img
          src={producte.imatge}
          alt={producte.nom}
          className={`imatge ${esgotat ? 'esgotada' : ''}`.trim()}
        />

        <div className="detalls">
          <span className="categoria">{producte.categoria}</span>
          <h1 className="nom">{producte.nom}</h1>
          <p className="preu">{producte.preu.toFixed(2)} €</p>
          <p className="descripcio">{producte.descripcio}</p>

          <p className={esgotat ? 'textSenseEstoc' : 'textEstoc'}>
            {esgotat ? 'Sense estoc disponible' : `${producte.estoc} unitats disponibles`}
          </p>

          {!esgotat && (
            <div className="compraBloc">
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
            <p className="missatgeAfegit">
              ✓ Afegit al carret correctament!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
