import { useCallback, useEffect, useState } from "react";
import { serviceGallery } from "./services/serviceGallery";
import { getImageUrl } from "./utils/getImageUrl";

export const useLoadImages = (): UseLoadImages => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onLoad = useCallback(async () => {
    setIsLoading(true);
    const gallery = await serviceGallery.getAll();

    const promise = await gallery.map(({ img: src }) => {
      return new Promise((resolve) => {
        const img = new Image();

        img.src = getImageUrl(src);
        img.onload = () => {
          resolve(src);
        };
      });
    });

    await Promise.all(promise);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  const hide = useCallback(() => {
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    hide,
  };
};

interface UseLoadImages {
  isLoading: boolean;
  hide: () => void;
}
