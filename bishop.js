function generateBishopMovements(piece) {
    [a, b, aI, bI] = extractAB(piece);
    let coordinates = [];

    // i + j + 
    for (let i = aI + 1, j = bI + 1; i < 8; i++) {
        let coordinate = (columns[i] + rows[j++]);
        console.log(coordinate);
        coordinates.push(coordinate);
    }

    // i - j + 
    for (let i = aI - 1, j = bI + 1; i >= 0; i--) {
        let coordinate = (columns[i] + rows[j++]);
        console.log(coordinate);
        coordinates.push(coordinate);
    }

    // i - j - 
    for (let i = aI - 1, j = bI - 1; i >= 0; i--) {
        let coordinate = (columns[i] + rows[j--]);
        console.log(coordinate);
        coordinates.push(coordinate);
    }

    // i + j - 
    for (let i = aI + 1, j = bI - 1; i < 8; i++) {
        let coordinate = (columns[i] + rows[j--]);
        console.log(coordinate);
        coordinates.push(coordinate);
    }

    console.log('the extracted points ' + a, b, aI, bI)   

    console.log(coordinates);
    return coordinates;
}



