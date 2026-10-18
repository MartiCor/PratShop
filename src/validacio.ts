import type { DadesCompra, ErrorsCompra } from './tipus';

// Validació senzilla del formulari de compra
export function validar(dades: DadesCompra): ErrorsCompra {
  const errors: ErrorsCompra = {};

  if (!dades.nom.trim() || dades.nom.trim().length < 3) {
    errors.nom = 'Introdueix un nom de com a mínim 3 lletres.';
  }

  if (!dades.correu.trim() || !dades.correu.includes('@') || !dades.correu.includes('.')) {
    errors.correu = 'Introdueix un correu electrònic vàlid.';
  }

  if (!dades.adreca.trim()) {
    errors.adreca = "L'adreça de lliurament és obligatòria.";
  }

  // Codi postal de 5 dígits
  const cp = dades.codiPostal.trim();
  if (cp.length !== 5 || isNaN(Number(cp))) {
    errors.codiPostal = 'El codi postal ha de tenir exactament 5 números.';
  }

  if (!dades.metodePagament) {
    errors.metodePagament = 'Tria una forma de pagament.';
  }

  if (!dades.acceptaCondicions) {
    errors.acceptaCondicions = 'Has d’acceptar les condicions.';
  }

  return errors;
}
