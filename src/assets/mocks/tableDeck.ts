import { IDeckCard } from "../../domain/IDeckCard";

export const MOCK_TABLE_DECK: IDeckCard[] = [
    {
        id: "ruin1",
        img: "src/assets/base/deck/1_05.jpg",
        isRuins: true,
        capacity: 0,
    },
    {
        id: "ruin2",
        img: "src/assets/base/deck/1_06.jpg",
        isRuins: true,
        capacity: 0,
    }
]

for (let i = 7; i < 11; i++) {
    MOCK_TABLE_DECK.push({
        id: "deck" + i,
        img: `src/assets/base/deck/1_${String(i).padStart(2, '0')}.jpg`,
        capacity: 1
    })
}

for (let i = 11; i < 17; i++) {
    MOCK_TABLE_DECK.push({
        id: "deck" + i,
        img: `src/assets/base/deck/1_${String(i).padStart(2, '0')}.jpg`,
        capacity: 2
    })
}

MOCK_TABLE_DECK.push({
    id: "deck17",
    img: `src/assets/base/deck/1_17.jpg`,
    capacity: 0
})

for (let i = 1; i <= 4; i++) {
    MOCK_TABLE_DECK.push({
        id: "deckAmbush" + i,
        img: `src/assets/base/deck/ambush_${i}.jpg`,
        isAmbush: true,
        capacity: 0,
    })
}