import { AvatarSize } from "../types";

export const sizeClasses: Record<AvatarSize, string> = {
  sm: "w-6 h-6 text-xs",
  md: "w-8 h-8 text-sm",
  lg: "w-10 h-10 text-base",
  xl: "w-12 h-12 text-lg",
};

export const AVATOX_R2_URL = "https://pub-7170132338c2401f80878e3c6a0c0e86.r2.dev";
export const IMAGE_COUNT = 20;
export const IMAGE_EXTENSION = "png";
export const DEFAULT_BG_COLOR = "bg-gradient-to-br from-blue-500 to-blue-600";
