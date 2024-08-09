import { useCallback, useEffect, useState } from "react";
import { serviceGallery } from "../services/serviceGallery";
import { getImageUrl } from "../utils/getImageUrl";

export const usePreLoadImages = (): UseLoadImages => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    serviceGallery.getImages().then((gallery) => {
      const promises = gallery.map((img) => {
        return new Promise((resolve) => {
          const imgTag = new Image();
          imgTag.src = getImageUrl(img.img);
          imgTag.onload = () => {
            resolve(img);
          };
        });
      });
      return Promise.all(promises).then((result) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return result;
      });
    });
  }, []);

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
