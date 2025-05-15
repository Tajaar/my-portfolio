import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
}) => {
  const baseStyles = "bg-dark-200 rounded-xl overflow-hidden shadow-md transition-all duration-500";
  const hoverStyles = hoverEffect 
    ? "hover:transform hover:scale-[1.02] hover:shadow-neon-xl group before:absolute before:inset-0 before:bg-gradient-to-tr before:from-neon-purple/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100" 
    : "";
  const cursorStyle = onClick ? "cursor-pointer" : "";

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${cursorStyle} ${className} relative`}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      <div className="absolute inset-0 border-2 border-transparent transition-colors duration-500 group-hover:border-neon-purple/30 rounded-xl"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;