import React, { useState } from "react";

interface AvatarProps {
  src?: string;
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  bgColor?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement | HTMLImageElement>;
}

const sizeClasses = {
  sm: "w-6 h-6 text-xs",
  md: "w-8 h-8 text-sm",
  lg: "w-10 h-10 text-base",
  xl: "w-12 h-12 text-lg",
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = "md",
  className = "",
  bgColor = "bg-gradient-to-br from-blue-500 to-blue-600",
  onClick,
}) => {
  const [imgError, setImgError] = useState(false);

  const getInitials = (fullName: string) => {
    if (!fullName.trim()) return "?";
    const names = fullName.trim().split(/\s+/);
    return names.length === 1
      ? names[0][0].toUpperCase()
      : (names[0][0] + names[names.length - 1][0]).toUpperCase();
  };

  const baseClasses = `${sizeClasses[size]} rounded-full overflow-hidden flex items-center justify-center ${className}`;

  return (
    <div
      className={baseClasses}
      aria-label={`Avatar for ${name}`}
      onClick={onClick}
    >
      {!imgError && src ? (
        <img
          src={src}
          alt={name}
          className="object-cover w-full h-full"
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          className={`${bgColor} w-full h-full flex items-center justify-center text-white font-semibold`}
        >
          {getInitials(name)}
        </div>
      )}
    </div>
  );
};

export default Avatar;
