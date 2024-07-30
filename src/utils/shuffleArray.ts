/**
 * Shuffle array
 * @param {T[]} array
 * @param {boolean} [inPlace=false]
 * @returns {T[]} new array with shuffled items
 */
export const shuffleArray = <T>(array: T[], inPlace: boolean = false): T[] => {
    const arr = inPlace ? array : [...array]
    return arr.sort(() => Math.random() < 0.5 ? -1 : 1)
}