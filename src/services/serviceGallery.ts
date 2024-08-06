import { ICard } from "../domain/ICard";
import { CONTEXT_MOCK } from "./context/contextMock";
import { Service } from "./service";

class ServiceGallery extends Service<ICard> {
  getImages = async () => {
    return this.withStore("images", async () => {
      return await this.getAll();
    });
  };
}

export const serviceGallery = new ServiceGallery("gallery", CONTEXT_MOCK);
