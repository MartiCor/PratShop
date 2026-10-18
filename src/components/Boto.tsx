import React from 'react';
import './Boto.css';

type Props = {
  children: React.ReactNode;
  variant?: 'primari' | 'secundari' | 'perill';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  className?: string;
};

export default function Boto({
  children,
  variant = 'primari',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`boto ${variant} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
