import React from 'react';

interface AvatarProps {
  src?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement | HTMLImageElement>;
}

const Avatar: React.FC<AvatarProps> = ({ src, name, size = 'md', className = '', onClick }) => {
  const getInitials = (fullName: string) => {
    const names = fullName.trim().split(' ');
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
    xl: 'w-12 h-12 text-lg'
  };

  const baseClasses = `${sizeClasses[size]} rounded-full flex items-center justify-center ${className}`;

  if (src) {
    return (
      <img
        className={baseClasses}
        src={src}
        alt={name}
        onClick={onClick}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const initialsDiv = e.currentTarget.nextElementSibling as HTMLElement;
          if (initialsDiv) {
            initialsDiv.style.display = 'flex';
          }
        }}
      />
    );
  }

  return (
    <div
      className={`${baseClasses} bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold`}
      onClick={onClick}
    >
      {getInitials(name)}
    </div>
  );
};

export default Avatar;
