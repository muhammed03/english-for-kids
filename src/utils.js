export const cardToMap = cards => {
    const [categories, ...rest] = cards;
    const cardsMap = {};
    for (let i = 0; i < categories.length; i++) {
        cardsMap[categories[i]] = rest[i];
    }
    return cardsMap;
}

export const idToCategoryMap = cards => {
    const [categories,] = cards;
    const idMap = {};
    for (let i = 0; i < categories.length; i++) {
        idMap[`#category-${i}`] = categories[i];
    }
    return idMap;
}