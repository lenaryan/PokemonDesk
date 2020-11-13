import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

// export enum Sizes {
//   small,
//   medium,
//   large
// }

// export enum Colors {
//   primary,
//   green,
//   blue
// }

interface ButtonProps {
  fullWidth?: boolean;
  size?: string;
  color?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, fullWidth, size, color, className }) => {
  return (
    <button
      type="button"
      className={cn(
        s.root,
        fullWidth && s.w100,
        size,
        color,
        className,
        // s[size],
        // s[color],
        // выводит ошибку
        // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'CssExports'.
        // No index signature with a parameter of type 'string' was found on type 'CssExports'.
      )}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
