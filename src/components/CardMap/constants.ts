import { CardMapNameEnum } from "../../domain/CardMapNameType";

export const CARD_MAPS: Record<CardMapNameEnum, string> = {
    [CardMapNameEnum.NONE]: "",
    [CardMapNameEnum.A]: "src/assets/base/cardMapA.jpg",
    [CardMapNameEnum.B]: "src/assets/base/cardMapB.jpg",
}