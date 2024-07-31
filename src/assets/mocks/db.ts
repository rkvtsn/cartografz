import { MOCK_QUERY_GALLERY } from "./queryGallery";
import { MOCK_TABLE_DECK } from "./tableDeck";
import { MOCK_TABLE_GOALS } from "./tableGoals";
import { MOCK_TABLE_MAPS } from "./tableMaps";
import { MOCK_TABLE_ORDERS } from "./tableOrders";
import { MOCK_TABLE_SEASONS } from "./tableSeasons";

export const MOCK_DB = {
  orders: MOCK_TABLE_ORDERS,
  seasons: MOCK_TABLE_SEASONS,
  goals: MOCK_TABLE_GOALS,
  "deck-cards": MOCK_TABLE_DECK,
  games: [],
  maps: MOCK_TABLE_MAPS,
  gallery: MOCK_QUERY_GALLERY,
};
