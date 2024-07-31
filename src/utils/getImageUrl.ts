/**
 * Some magic stuff for Vite and dynamic images
 * @param src
 * @returns
 */
export const getImageUrl = (src: string) => {
  return new URL(`../assets/${src}`, import.meta.url).href;
};
