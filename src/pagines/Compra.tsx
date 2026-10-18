import { useState } from 'react';
import { Navigate, Link } from 'react-router';
import clsx from 'clsx';
import Boto from '../components/Boto';
import { validar } from '../validacio';
import type { DadesCompra, ErrorsCompra, LiniaCarro } from '../tipus';
import estils from './Compra.module.css';

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
      <div className={estils.container}>
        <div className={estils.exitCard}>
          <span className={clsx('material-symbols-outlined', estils.exitIcona)}>
            check_circle
          </span>
          <h1 className={estils.exitTitol}>Gràcies per la teva compra!</h1>
          <p className={estils.exitText}>
            La comanda s'ha tramitat correctament a nom de <strong>{dades.nom}</strong>.
            T'hem enviat el comprovant al correu <strong>{dades.correu}</strong>.
          </p>
          <div className={estils.exitAccions}>
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
    <div className={estils.container}>
      <h1 className={estils.titol}>Finalitzar la compra</h1>

      <div className={estils.grid}>
        {/* Formulari controlat */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className={estils.formulari}
          aria-label="Formulari de compra"
        >
          {/* Nom */}
          <div className={estils.camp}>
            <label htmlFor="nom" className={estils.etiqueta}>
              Nom complet *
            </label>
            <input
              id="nom"
              name="nom"
              type="text"
              value={dades.nom}
              onChange={handleChange}
              placeholder="Ex. Maria Garcia"
              className={clsx(estils.input, errors.nom && estils.inputError)}
            />
            {errors.nom && (
              <span className={estils.missatgeError}>{errors.nom}</span>
            )}
          </div>

          {/* Correu */}
          <div className={estils.camp}>
            <label htmlFor="correu" className={estils.etiqueta}>
              Correu electrònic *
            </label>
            <input
              id="correu"
              name="correu"
              type="email"
              value={dades.correu}
              onChange={handleChange}
              placeholder="Ex. maria@example.cat"
              className={clsx(estils.input, errors.correu && estils.inputError)}
            />
            {errors.correu && (
              <span className={estils.missatgeError}>{errors.correu}</span>
            )}
          </div>

          {/* Adreça */}
          <div className={estils.camp}>
            <label htmlFor="adreca" className={estils.etiqueta}>
              Adreça de lliurament *
            </label>
            <input
              id="adreca"
              name="adreca"
              type="text"
              value={dades.adreca}
              onChange={handleChange}
              placeholder="Carrer, número, pis o porta"
              className={clsx(estils.input, errors.adreca && estils.inputError)}
            />
            {errors.adreca && (
              <span className={estils.missatgeError}>{errors.adreca}</span>
            )}
          </div>

          {/* Codi Postal */}
          <div className={estils.camp}>
            <label htmlFor="codiPostal" className={estils.etiqueta}>
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
              className={clsx(estils.input, errors.codiPostal && estils.inputError)}
            />
            {errors.codiPostal && (
              <span className={estils.missatgeError}>{errors.codiPostal}</span>
            )}
          </div>

          {/* Mètode de pagament */}
          <div className={estils.camp}>
            <label htmlFor="metodePagament" className={estils.etiqueta}>
              Mètode de pagament *
            </label>
            <select
              id="metodePagament"
              name="metodePagament"
              value={dades.metodePagament}
              onChange={handleChange}
              className={clsx(estils.select, errors.metodePagament && estils.inputError)}
            >
              <option value="targeta">Targeta bancària (Crèdit / Dèbit)</option>
              <option value="bizum">Bizum</option>
              <option value="transferencia">Transferència bancària</option>
            </select>
            {errors.metodePagament && (
              <span className={estils.missatgeError}>{errors.metodePagament}</span>
            )}
          </div>

          {/* Acceptació de condicions */}
          <div className={estils.campCheckbox}>
            <label className={estils.labelCheckbox}>
              <input
                id="acceptaCondicions"
                name="acceptaCondicions"
                type="checkbox"
                checked={dades.acceptaCondicions}
                onChange={handleChange}
                className={estils.checkbox}
              />
              <span>
                Accepto els termes i les condicions de compra de PratShop *
              </span>
            </label>
            {errors.acceptaCondicions && (
              <span className={estils.missatgeError}>
                {errors.acceptaCondicions}
              </span>
            )}
          </div>

          <Boto type="submit" variant="primari" className={estils.botoEnviar}>
            <span className="material-symbols-outlined">lock</span>
            Confirmar i Pagar ({total.toFixed(2)} €)
          </Boto>
        </form>

        {/* Resum lateral */}
        <aside className={estils.resumAside}>
          <h2 className={estils.resumTitol}>Resum de la comanda</h2>
          <ul className={estils.resumLlista}>
            {carro.map((linia) => (
              <li key={linia.producte.id} className={estils.resumLinia}>
                <div className={estils.resumInfo}>
                  <span className={estils.resumNom}>{linia.producte.nom}</span>
                  <span className={estils.resumUnitats}>
                    {linia.unitats} × {linia.producte.preu.toFixed(2)} €
                  </span>
                </div>
                <span className={estils.resumSubtotal}>
                  {(linia.unitats * linia.producte.preu).toFixed(2)} €
                </span>
              </li>
            ))}
          </ul>
          <div className={estils.resumTotal}>
            <span>Total a pagar</span>
            <span className={estils.totalXifra}>{total.toFixed(2)} €</span>
          </div>
        </aside>
      </div>
    </div>
  );
}