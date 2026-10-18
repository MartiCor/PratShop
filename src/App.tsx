import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Disposicio from './components/Disposicio';
import Inici from './pagines/Inici';
import Cataleg from './pagines/Cataleg';
import DetallProducte from './pagines/DetallProducte';
import Carro from './pagines/Carro';
import Compra from './pagines/Compra';
import NoTrobada from './pagines/NoTrobada';
import type { DadesCompra, LiniaCarro, Producte } from './tipus';

// Clau amb què es desa el carret al navegador
const CLAU_STORAGE = 'pratshop-carro-v1';

export default function App() {
  // Lectura inicial de localStorage dins d'un try/catch
  const [carro, setCarro] = useState<LiniaCarro[]>(() => {
    try {
      const desat = localStorage.getItem(CLAU_STORAGE);
      return desat ? (JSON.parse(desat) as LiniaCarro[]) : [];
    } catch (error) {
      console.error('Error llegint el carret de localStorage', error);
      return [];
    }
  });

  // Persistència automàtica amb useEffect
  useEffect(() => {
    try {
      localStorage.setItem(CLAU_STORAGE, JSON.stringify(carro));
    } catch (error) {
      console.error('Error desant el carret a localStorage', error);
    }
  }, [carro]);

  // Accions del carret
  function afegeixProducte(producte: Producte, unitatsAAfegir = 1) {
    if (producte.estoc === 0) return;

    setCarro((anterior) => {
      const existent = anterior.find((l) => l.producte.id === producte.id);
      if (existent) {
        const novesUnitats = Math.min(producte.estoc, existent.unitats + unitatsAAfegir);
        return anterior.map((linia) =>
          linia.producte.id === producte.id
            ? { ...linia, unitats: novesUnitats }
            : linia,
        );
      }
      return [
        ...anterior,
        { producte, unitats: Math.min(producte.estoc, unitatsAAfegir) },
      ];
    });
  }

  function canviaUnitats(id: string, novesUnitats: number) {
    setCarro((anterior) =>
      anterior.map((linia) => {
        if (linia.producte.id !== id) return linia;
        const ajustat = Math.max(1, Math.min(linia.producte.estoc, novesUnitats));
        return { ...linia, unitats: ajustat };
      }),
    );
  }

  function eliminaLinia(id: string) {
    setCarro((anterior) => anterior.filter((l) => l.producte.id !== id));
  }

  function buidaCarret() {
    setCarro([]);
  }

  // Quan la compra és correcta, es buida el carret
  function finalitzaCompra(_dadesClient: DadesCompra) {
    setCarro([]);
  }

  // Unitats totals calculades
  const unitatsTotals = carro.reduce((suma, linia) => suma + linia.unitats, 0);

  return (
    <Routes>
      <Route element={<Disposicio unitatsAlCarro={unitatsTotals} />}>
        <Route path="/" element={<Inici onAfegir={afegeixProducte} />} />
        <Route path="/cataleg" element={<Cataleg onAfegir={afegeixProducte} />} />
        <Route
          path="/producte/:id"
          element={<DetallProducte onAfegir={afegeixProducte} />}
        />
        <Route
          path="/carro"
          element={
            <Carro
              carro={carro}
              onCanviaUnitats={canviaUnitats}
              onEsborra={eliminaLinia}
              onBuida={buidaCarret}
            />
          }
        />
        <Route
          path="/compra"
          element={<Compra carro={carro} onFinalitzaCompra={finalitzaCompra} />}
        />
        {/* Les URL desconegudes van a la 404 */}
        <Route path="*" element={<NoTrobada />} />
      </Route>
    </Routes>
  );
}
