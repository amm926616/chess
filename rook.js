function generateRookMovements(piece) {
    [a, b, aI, bI] = extractAB(piece);
    let coordinates = [];

    for (let i = aI + 1; i < 8; i++) {
        coordinates.push(columns[i] + b);
    }

    for (let i = aI - 1; i >= 0; i--) {
        coordinates.push(columns[i] + b);
    }

    for (let j = bI + 1; j < 8; j++) {
        coordinates.push(a + rows[j]);
    }

    for (let j = bI - 1; j >= 0; j--) {
        coordinates.push(a + rows[j]);
    }

    return coordinates;
}