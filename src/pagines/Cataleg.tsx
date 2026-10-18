import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { PRODUCTES } from '../dades/productes';
import TargetaProducte from '../components/TargetaProducte';
import type { CategoryKey, Producte } from '../tipus';
import './Cataleg.css';

type Props = {
  onAfegir: (producte: Producte) => void;
};

const CATEGORIES: { clau: CategoryKey; nom: string }[] = [
  { clau: 'all', nom: 'Totes' },
  { clau: 'abrics', nom: 'Abrics' },
  { clau: 'camises', nom: 'Camises' },
  { clau: 'jerseys', nom: 'Jerseis' },
  { clau: 'pantalons', nom: 'Pantalons' },
  { clau: 'vestits', nom: 'Vestits' },
  { clau: 'complements', nom: 'Complements' },
];

export default function Cataleg({ onAfegir }: Props) {
  const [params, setParams] = useSearchParams();

  // El text de cerca viu a la URL (?cerca=...)
  const cerca = params.get('cerca') ?? '';
  const categoria = (params.get('categoria') as CategoryKey) ?? 'all';

  function canviaCerca(nouText: string) {
    const nouParams = new URLSearchParams(params);
    if (!nouText.trim()) {
      nouParams.delete('cerca');
    } else {
      nouParams.set('cerca', nouText);
    }
    setParams(nouParams, { replace: true });
  }

  function canviaCategoria(novaCat: CategoryKey) {
    const nouParams = new URLSearchParams(params);
    if (novaCat === 'all') {
      nouParams.delete('categoria');
    } else {
      nouParams.set('categoria', novaCat);
    }
    setParams(nouParams);
  }

  // Filtratge de productes
  const filtrats = useMemo(() => {
    return PRODUCTES.filter((p) => {
      if (categoria !== 'all' && p.categoria !== categoria) {
        return false;
      }
      if (cerca.trim() && !p.nom.toLowerCase().includes(cerca.toLowerCase())) {
        return false;
      }
      return true;
    });
  }, [cerca, categoria]);

  return (
    <div className="container">
      {/* Capçalera del catàleg amb cercador */}
      <div className="capcalera">
        <div>
          <h1 className="titol">Catàleg de productes</h1>
          <p className="subtitol">
            Mostrant {filtrats.length} de {PRODUCTES.length} peces
          </p>
        </div>

        <input
          type="text"
          value={cerca}
          onChange={(e) => canviaCerca(e.target.value)}
          placeholder="Cercar per nom..."
          className="cercador"
        />
      </div>

      {/* Botons de categoria */}
      <div className="categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.clau}
            type="button"
            onClick={() => canviaCategoria(cat.clau)}
            className={`botoCategoria ${
              categoria === cat.clau ? 'actiu' : ''
            }`.trim()}
          >
            {cat.nom}
          </button>
        ))}
      </div>

      {/* Graella de productes o missatge de buit */}
      {filtrats.length > 0 ? (
        <div className="graella">
          {filtrats.map((prod) => (
            <TargetaProducte key={prod.id} producte={prod} onAfegir={onAfegir} />
          ))}
        </div>
      ) : (
        <div className="senseResultats">
          <p>No s'ha trobat cap producte amb aquests filtres.</p>
        </div>
      )}
    </div>
  );
}
