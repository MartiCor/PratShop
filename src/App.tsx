import { useState, useEffect } from 'react';
import Header from './components/Header';
import Cataleg from './pages/Cataleg';
import type { LiniaCarro, Product } from './types/product';

// Clau amb què es desa el carro al navegador.
const CLAU = 'pratshop-carro';

function carregaCarro(): LiniaCarro[] {
  try {
    const desat = localStorage.getItem(CLAU);
    return desat ? (JSON.parse(desat) as LiniaCarro[]) : [];
  } catch {
    return [];
  }
}

function App() {
  const [carro, setCarro] = useState<LiniaCarro[]>(carregaCarro);

  useEffect(() => {
    localStorage.setItem(CLAU, JSON.stringify(carro));
  }, [carro]);

  function afegeix(producte: Product) {
    if (producte.estoc === 0) return;

    setCarro((anterior) => {
      const jaHiEs = anterior.find((linia) => linia.producte.id === producte.id);
      if (jaHiEs) {
        return anterior.map((linia) =>
          linia.producte.id === producte.id
            ? { ...linia, unitats: linia.unitats + 1 }
            : linia,
        );
      }
      return [...anterior, { producte, unitats: 1 }];
    });
  }

  const unitats = carro.reduce((suma, linia) => suma + linia.unitats, 0);

  return (
    <>
      <Header unitatsAlCarro={unitats} />
      <Cataleg onAfegir={afegeix} unitatsAlCarro={unitats} />
    </>
  );
}

export default App;
