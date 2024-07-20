import { FC, MouseEventHandler } from 'react';
import { Link, To } from 'react-router-dom';

interface ButtonProps {
  route?: To;
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  primary?: boolean;
  styled?: boolean;
  className?: string;
  submit?: boolean;
  danger?: boolean;
}

const Button: FC<ButtonProps> = ({
  route = '#',
  onClick,
  disabled = false,
  submit,
  primary,
  danger,
  styled = true,
  className,
  children,
}) => {
  if (submit) {
    return (
      <button
        className={`border-[1.5px] text-white flex items-center justify-center text-center text-[16px] border-white rounded-sm py-[6px] px-4 hover:bg-primary hover:border-primary hover:text-white transition-all hover:scale-[1.01] ${
          primary && 'bg-primary text-white !border-primary'
        } ${
          danger &&
          'bg-red-600 border-none text-white hover:bg-red-600 hover:text-white shadow-sm'
        } ${
          !styled &&
          '!bg-transparent hover:underline hover:bg-transparent border-none hover:!text-black hover:scale-[1.00] text-[13px] !px-0'
        } 
        ${disabled && 'opacity-50 cursor-not-allowed'}
        ${className}`}
        type="submit"
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      to={route}
      onClick={onClick}
      className={`border-[1.5px] text-white flex text-[16px] items-center justify-center text-center border-white rounded-sm py-[6px] px-4 hover:bg-primary hover:border-primary hover:text-white transition-all hover:scale-[1.01] ${
        primary && 'bg-primary text-white !border-primary'
      } ${
        danger &&
        'bg-red-600 border-none text-white hover:bg-red-600 hover:text-white shadow-sm'
      } ${
        !styled &&
        '!bg-transparent hover:bg-transparent border-none hover:!text-black hover:scale-[1.00] text-[13px] !px-0'
      }
      ${disabled && 'opacity-50 cursor-not-allowed'}
      ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
