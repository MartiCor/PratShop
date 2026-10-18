import { useState } from 'react';
import { Navigate, Link } from 'react-router';
import Boto from '../components/Boto';
import { validar } from '../validacio';
import type { DadesCompra, ErrorsCompra, LiniaCarro } from '../tipus';
import './Compra.css';

type Props = {
  carro: LiniaCarro[];
  onFinalitzaCompra: (dades: DadesCompra) => void;
};

export default function Compra({ carro, onFinalitzaCompra }: Props) {
  const [compraCompletada, setCompraCompletada] = useState<boolean>(false);

  const [dades, setDades] = useState<DadesCompra>({
    nom: '',
    correu: '',
    adreca: '',
    codiPostal: '',
    metodePagament: 'targeta',
    acceptaCondicions: false,
  });

  const [errors, setErrors] = useState<ErrorsCompra>({});

  // Si la compra s'ha completat amb èxit, mostrem el missatge directe aquí
  if (compraCompletada) {
    return (
      <div className="container">
        <div className="exitCard">
          <span className="material-symbols-outlined exitIcona">
            check_circle
          </span>
          <h1 className="exitTitol">Gràcies per la teva compra!</h1>
          <p className="exitText">
            La comanda s'ha tramitat correctament a nom de <strong>{dades.nom}</strong>.
            T'hem enviat el comprovant al correu <strong>{dades.correu}</strong>.
          </p>
          <div className="exitAccions">
            <Link to="/">
              <Boto variant="secundari">Tornar a l'inici</Boto>
            </Link>
            <Link to="/cataleg">
              <Boto variant="primari">Continuar comprant</Boto>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Si no hi ha productes al carret i no s'ha comprat, redirigim al carret
  if (carro.length === 0) {
    return <Navigate to="/carro" replace />;
  }

  const total = carro.reduce(
    (suma, linia) => suma + linia.producte.preu * linia.unitats,
    0,
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setDades((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name as keyof ErrorsCompra]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nousErrors = validar(dades);
    setErrors(nousErrors);

    if (Object.keys(nousErrors).length === 0) {
      onFinalitzaCompra(dades);
      setCompraCompletada(true);
    }
  }

  return (
    <div className="container">
      <h1 className="titol">Finalitzar la compra</h1>

      <div className="grid">
        {/* Formulari controlat */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="formulari"
          aria-label="Formulari de compra"
        >
          {/* Nom */}
          <div className="camp">
            <label htmlFor="nom" className="etiqueta">
              Nom complet *
            </label>
            <input
              id="nom"
              name="nom"
              type="text"
              value={dades.nom}
              onChange={handleChange}
              placeholder="Ex. Maria Garcia"
              className={`input ${errors.nom ? 'inputError' : ''}`.trim()}
            />
            {errors.nom && <span className="missatgeError">{errors.nom}</span>}
          </div>

          {/* Correu */}
          <div className="camp">
            <label htmlFor="correu" className="etiqueta">
              Correu electrònic *
            </label>
            <input
              id="correu"
              name="correu"
              type="email"
              value={dades.correu}
              onChange={handleChange}
              placeholder="Ex. maria@example.cat"
              className={`input ${errors.correu ? 'inputError' : ''}`.trim()}
            />
            {errors.correu && (
              <span className="missatgeError">{errors.correu}</span>
            )}
          </div>

          {/* Adreça */}
          <div className="camp">
            <label htmlFor="adreca" className="etiqueta">
              Adreça de lliurament *
            </label>
            <input
              id="adreca"
              name="adreca"
              type="text"
              value={dades.adreca}
              onChange={handleChange}
              placeholder="Carrer, número, pis o porta"
              className={`input ${errors.adreca ? 'inputError' : ''}`.trim()}
            />
            {errors.adreca && (
              <span className="missatgeError">{errors.adreca}</span>
            )}
          </div>

          {/* Codi Postal */}
          <div className="camp">
            <label htmlFor="codiPostal" className="etiqueta">
              Codi Postal (5 xifres) *
            </label>
            <input
              id="codiPostal"
              name="codiPostal"
              type="text"
              maxLength={5}
              value={dades.codiPostal}
              onChange={handleChange}
              placeholder="08001"
              className={`input ${errors.codiPostal ? 'inputError' : ''}`.trim()}
            />
            {errors.codiPostal && (
              <span className="missatgeError">{errors.codiPostal}</span>
            )}
          </div>

          {/* Mètode de pagament */}
          <div className="camp">
            <label htmlFor="metodePagament" className="etiqueta">
              Mètode de pagament *
            </label>
            <select
              id="metodePagament"
              name="metodePagament"
              value={dades.metodePagament}
              onChange={handleChange}
              className={`select ${
                errors.metodePagament ? 'inputError' : ''
              }`.trim()}
            >
              <option value="targeta">Targeta bancària (Crèdit / Dèbit)</option>
              <option value="bizum">Bizum</option>
              <option value="transferencia">Transferència bancària</option>
            </select>
            {errors.metodePagament && (
              <span className="missatgeError">{errors.metodePagament}</span>
            )}
          </div>

          {/* Acceptació de condicions */}
          <div className="campCheckbox">
            <label className="labelCheckbox">
              <input
                id="acceptaCondicions"
                name="acceptaCondicions"
                type="checkbox"
                checked={dades.acceptaCondicions}
                onChange={handleChange}
                className="checkbox"
              />
              <span>
                Accepto els termes i les condicions de compra de PratShop *
              </span>
            </label>
            {errors.acceptaCondicions && (
              <span className="missatgeError">
                {errors.acceptaCondicions}
              </span>
            )}
          </div>

          <Boto type="submit" variant="primari" className="botoEnviar">
            <span className="material-symbols-outlined">lock</span>
            Confirmar i Pagar ({total.toFixed(2)} €)
          </Boto>
        </form>

        {/* Resum lateral */}
        <aside className="resumAside">
          <h2 className="resumTitol">Resum de la comanda</h2>
          <ul className="resumLlista">
            {carro.map((linia) => (
              <li key={linia.producte.id} className="resumLinia">
                <div className="resumInfo">
                  <span className="resumNom">{linia.producte.nom}</span>
                  <span className="resumUnitats">
                    {linia.unitats} × {linia.producte.preu.toFixed(2)} €
                  </span>
                </div>
                <span className="resumSubtotal">
                  {(linia.unitats * linia.producte.preu).toFixed(2)} €
                </span>
              </li>
            ))}
          </ul>
          <div className="resumTotal">
            <span>Total a pagar</span>
            <span className="totalXifra">{total.toFixed(2)} €</span>
          </div>
        </aside>
      </div>
    </div>
  );
}