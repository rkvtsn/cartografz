import { CardMapNameEnum } from "../../domain/CardMapNameType";

export const CARD_MAPS: Record<CardMapNameEnum, string> = {
  [CardMapNameEnum.NONE]: "",
  [CardMapNameEnum.A]: "base/cardMapA.jpg",
  [CardMapNameEnum.B]: "base/cardMapB.jpg",
};
