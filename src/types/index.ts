import React from "react";

export type AvatarSize = "sm" | "md" | "lg" | "xl";
export type AvatarVariant = "initials" | "random";

export interface AvatarProps {
  src?: string;
  name: string;
  variant?: AvatarVariant;
  imageExtension?: string;
  size?: AvatarSize;
  className?: string;
  bgColor?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement | HTMLImageElement>;
}
