import React, { useState } from "react";
import { AvatarProps } from "../types/index";
import { sizeClasses, DEFAULT_BG_COLOR } from "../constants";
import { getInitials, getRandomImage } from "../utils";

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  variant = "initials",
  imageExtension,
  size = "md",
  className = "",
  bgColor = DEFAULT_BG_COLOR,
  onClick,
}) => {
  const [imgError, setImgError] = useState(false);

  const finalSrc = variant === "random" ? getRandomImage(name, imageExtension) : src;
  const baseClasses = `${sizeClasses[size]} rounded-full overflow-hidden flex items-center justify-center ${className}`;

  return (
    <div
      className={baseClasses}
      aria-label={`Avatar for ${name}`}
      onClick={onClick}
    >
      {!imgError && finalSrc ? (
        <img
          src={finalSrc}
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
