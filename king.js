function generateKingMovements(piece) {
    [a, b, aI, bI] = extractAB(piece);

    var coordinates = [a + rows[bI+1], columns[aI+1] + b, a + rows[bI-1], columns[aI-1] + b,
columns[aI+1] + rows[bI+1], columns[aI+1] + rows[bI-1], columns[aI-1] + rows[bI-1], columns[aI-1] + rows[bI+1]];

    console.log(coordinates);

    return coordinates;
}


