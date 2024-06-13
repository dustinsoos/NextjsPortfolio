import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  variant: 'custom-black' | 'custom-green';
  children: React.ReactNode;
  href?: string;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = '',
  variant,
  children,
  href,
}) => {
  const baseClasses =
    'px-12 py-2 focus:outline-none focus:shadow-outline transition-colors duration-500 transition: all 0.3s ease;';
  let variantClasses = '';

  switch (variant) {
    case 'custom-black':
      variantClasses =
        'bg-custom-black text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-custom-black';
      break;
    case 'custom-green':
      variantClasses =
        'bg-green-400 text-custom-black border-2 border-green-400 hover:bg-custom-black hover:border-green-400 hover:text-green-400';
      break;
    default:
      break;
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    // Adding rel="noopener noreferrer" for external links
    return (
      <a
        href={href}
        target='_blank'
        className={combinedClasses}
        onClick={onClick}
        role='button'
        rel='noopener noreferrer'
      >
        {children}
      </a>
    );
  } else {
    return (
      <button onClick={onClick} className={combinedClasses}>
        {children}
      </button>
    );
  }
};

export default Button;
