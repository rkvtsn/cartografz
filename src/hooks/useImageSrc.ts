import { useEffect, useState } from "react";
import { ICard } from "../domain/ICard";
import { serviceGallery } from "../services/serviceGallery";

export const useImageSrc = (card: ICard): string => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (card) {
      serviceGallery.getImageSrc(card).then((src) => {
        setImageSrc(src);
      });
    }
  }, [card]);

  return imageSrc;
};
