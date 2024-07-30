import { IDeckCard } from "../../domain/IDeckCard";

export const MOCK_TABLE_DECK: IDeckCard[] = [
    {
        id: "ruin1",
        img: "assets/base/deck/1_05.jpg",
        isRuins: true,
    },
    {
        id: "ruin2",
        img: "assets/base/deck/1_06.jpg",
        isRuins: true,
    }
]

for (let i = 7; i <= 17; i++) {
    MOCK_TABLE_DECK.push({
        id: "deck" + i,
        img: `assets/base/deck/1_${String(i).padStart(2, '0')}.jpg`,
    })
}

for (let i = 1; i <= 4; i++) {
    MOCK_TABLE_DECK.push({
        id: "deckAmbush" + i,
        img: `assets/base/deck/ambush_${i}.jpg`,
        isAmbush: true
    })
}