import estils from './SelectorQuantitat.module.css';

type Props = {
  valor: number;
  minim?: number; // 1 per defecte
  maxim: number;
  onCanvi: (nouValor: number) => void;
};

export default function SelectorQuantitat({
  valor,
  minim = 1,
  maxim,
  onCanvi,
}: Props) {
  return (
    <div className={estils.caixa}>
      <button
        type="button"
        className={estils.boto}
        disabled={valor <= minim}
        onClick={() => onCanvi(valor - 1)}
        aria-label="Restar una unitat"
      >
        −
      </button>
      <span className={estils.numero}>{valor}</span>
      <button
        type="button"
        className={estils.boto}
        disabled={valor >= maxim}
        onClick={() => onCanvi(valor + 1)}
        aria-label="Sumar una unitat"
      >
        +
      </button>
    </div>
  );
}
