import { ICard } from "../../domain/ICard";
import { MOCK_TABLE_DECK } from "./tableDeck";
import { MOCK_TABLE_GOALS } from "./tableGoals";
import { MOCK_TABLE_MAPS } from "./tableMaps";
import { MOCK_TABLE_ORDERS } from "./tableOrders";
import { MOCK_TABLE_SEASONS } from "./tableSeasons";

export const MOCK_QUERY_GALLERY: ICard[] = [
  ...MOCK_TABLE_DECK,
  ...MOCK_TABLE_GOALS,
  ...MOCK_TABLE_ORDERS,
  ...MOCK_TABLE_SEASONS,
  ...MOCK_TABLE_MAPS,
  {
    id: "closed",
    img: "base/card_closed.jpg",
  },
];
