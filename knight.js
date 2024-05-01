function generateKnightMovements(piece) {
    [a, b, aI, bI] = extractAB(piece);
    let coordinates = []; 

    coordinates.push(
        columns[aI+2] + rows[bI+1], columns[aI+2] + rows[bI-1], 
        columns[aI-2] + rows[bI+1], columns[aI-2] +rows[bI-1], 
        columns[aI+1] + rows[bI+2], columns[aI-1] + rows[bI+2], 
        columns[aI+1] + rows[bI-2], columns[aI-1] + rows[bI-2]
    )
    
    return coordinates;
}