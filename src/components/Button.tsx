import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  icon,
  iconPosition = 'left',
}) => {
  const baseStyles = 'rounded-lg font-medium transition-all duration-500 inline-flex items-center justify-center relative overflow-hidden group';
  
  const variantStyles = {
    primary: 'bg-neon-purple text-white hover:bg-neon-purple-dark hover:shadow-neon-xl active:transform active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-neon-purple-light before:to-neon-purple before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100',
    secondary: 'bg-neon-gold text-dark hover:bg-neon-gold-dark hover:shadow-gold-xl active:transform active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-neon-gold-light before:to-neon-gold before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100',
    outline: 'bg-transparent border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/10 hover:shadow-neon-xl active:transform active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-neon-purple/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'hover:transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark focus:ring-neon-purple focus:outline-none';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
    >
      <span className="relative flex items-center">
        {icon && iconPosition === 'left' && (
          <span className="mr-2 transition-transform duration-300 group-hover:scale-110">{icon}</span>
        )}
        <span className="relative z-10">{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="ml-2 transition-transform duration-300 group-hover:scale-110">{icon}</span>
        )}
      </span>
    </button>
  );
};

export default Button;