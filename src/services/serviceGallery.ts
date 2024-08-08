import { ICard } from "../domain/ICard";
import { ICardGallery } from "../domain/ICardGallery";
import { IndexedDbStorage } from "../storages/IndexedDbStorage";
import { getImageUrl } from "../utils/getImageUrl";
import { CONTEXT_MOCK } from "./context/contextMock";
import { Service } from "./service";

class ServiceGallery extends Service<ICardGallery> {
  getImages = async () => {
    return this.withStore("images", async () => {
      const gallery = await this.getAll();

      const promise = gallery.map((img) => {
        return new Promise((resolve) => {
          fetch(getImageUrl(img.img)).then((image) => {
            image.blob().then((blob) =>
              resolve({
                ...img,
                image: blob,
              })
            );
          });
        });
      });

      const images = await Promise.all(promise);
      return images;
    });
  };

  /**
   * @TODO resolve generic types mess
   * get cached image from IndexedDb
   */
  getImageSrc = async (card: ICard): Promise<string> => {
    const image = await this._storage.getItem<ICardGallery>(
      "images",
      (context) => {
        return (context as IDBObjectStore).get(card.id);
      }
    );
    if (image) {
      return URL.createObjectURL(image.image);
    }
    return getImageUrl(card.img);
  };
}

export const serviceGallery = new ServiceGallery(
  "gallery",
  CONTEXT_MOCK,
  new IndexedDbStorage("cartographers", { images: "images" })
);
