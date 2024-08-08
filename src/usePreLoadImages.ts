import { useCallback, useEffect, useState } from "react";
import { serviceGallery } from "./services/serviceGallery";

export const usePreLoadImages = (): UseLoadImages => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onLoad = useCallback(async () => {
    setIsLoading(true);
    console.log(await serviceGallery.getImages());
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
