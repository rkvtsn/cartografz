import { IDeckCard } from "../../domain/IDeckCard";
import { Service } from "../service";
import { serviceDeckCards } from "../serviceDeckCards";

beforeAll(() => {
  jest.spyOn(Service.prototype, "getAll").mockImplementation(
    async () =>
      new Promise((resolve) => {
        const deck: IDeckCard[] = [
          {
            id: "1",
            img: "",
            capacity: 1,
          },
          {
            id: "2",
            img: "",
            capacity: 1,
            isAmbush: true,
          },
          {
            id: "3",
            img: "",
            capacity: 1,
            isAmbush: true,
          },
          {
            id: "4",
            img: "",
            capacity: 1,
          },
        ];
        resolve(deck);
      })
  );
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("serviceDeckCards", () => {
  it("getDeck should return cards", async () => {
    const deck = await serviceDeckCards.getInvestigations();
    expect(deck.length).toBe(2);
  });
  it("getDeck should return cards with only one Ambush", async () => {
    const deck = await serviceDeckCards.getAmbushes();
    expect(deck.length).toBe(2);
    expect(deck.filter(({ isAmbush }) => isAmbush).length).toBe(2);
  });
});
