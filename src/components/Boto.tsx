import type { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';
import estils from './Boto.module.css';

export type BotoProps = ComponentProps<'button'> & {
  variant?: 'primari' | 'secundari' | 'perill';
  children: ReactNode;
};

export default function Boto({
  variant = 'primari',
  type = 'button',
  disabled = false,
  className,
  children,
  ...resta
}: BotoProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(estils.boto, estils[variant], className)}
      {...resta}
    >
      {children}
    </button>
  );
}
