import { AVATOX_R2_URL, IMAGE_COUNT, IMAGE_EXTENSION } from "../constants";

export const getInitials = (fullName: string): string => {
  if (!fullName.trim()) return "?";
  const names = fullName.trim().split(/\s+/);
  return names.length === 1
    ? names[0][0].toUpperCase()
    : (names[0][0] + names[names.length - 1][0]).toUpperCase();
};

export const getRandomImage = (fullName: string, extension: string = IMAGE_EXTENSION): string => {
  const hash = fullName.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const id = (hash % IMAGE_COUNT) + 1;
  return `${AVATOX_R2_URL}/${id}.${extension}`;
};
