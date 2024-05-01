const pieceImages = {
    "wp": "images/wp.png",
    "wr": "images/wr.png",
    "wn": "images/wn.png",
    "wb": "images/wb.png",
    "wq": "images/wq.png",
    "wk": "images/wk.png",
    "bp": "images/bp.png",
    "br": "images/br.png",
    "bn": "images/bn.png",
    "bb": "images/bb.png",
    "bq": "images/bq.png",
    "bk": "images/bk.png",
}

const initialBoard = [
    ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
]

const row_ties = ['8', '7', '6', '5', '4', '3', '2', '1'];
const column_ties = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

var chessboard = document.getElementById('chessboard');
const board_size = 8;

let beingDragged;
let draggedPieceCoordinate;
let newCoordinates = [];
let pawnTakingCoordinates = [];

function dragStart(e) {
    beingDragged = e.target;
    draggedPieceCoordinate = e.target.parentNode.id;
    console.log("draggedPieceCoordinate " + draggedPieceCoordinate);
    chessLogic(beingDragged);
}

function dragOver(e) {
    e.preventDefault();
}

function chessLogic(movingPiece) {
    const pieceName = movingPiece.className;

    if (pieceName == "#") {
        newCoordinates = generatePawnMovements(movingPiece, true);
    } 
    
    else if (pieceName == "pawn") {
        newCoordinates = generatePawnMovements(movingPiece, false);
        pawnTakingCoordinates = generatePawnTakingMovements(movingPiece);
    }

    else if (pieceName == "king") {
        newCoordinates = generateKingMovements(movingPiece);
    } 

    else if (pieceName == "bishop") {
        console.log("it is bishop")
        newCoordinates = generateBishopMovements(movingPiece);
    }

    else if (pieceName == "rook") {
        console.log('it is rook')
        newCoordinates = generateRookMovements(movingPiece);
    }

    else if (pieceName == "queen") {
        console.log('it is queen');
        newCoordinates = generateQueenMovements(movingPiece);
    }

    else if (pieceName == "knight") {
        console.log('it is knight');
        newCoordinates = generateKnightMovements(movingPiece);
    }
}

function dragDrop(e) {
    var droppingSquare;
    droppingSquare = e.target;
    console.log(droppingSquare);


    if (droppingSquare.tagName == 'IMG') {
        if (!beingDragged.classList.contains('pawn') && droppingSquare != beingDragged && droppingSquare.id[0] != beingDragged.id[0] && newCoordinates.includes(droppingSquare.parentNode.id)) {
            console.log("On Image");
            droppingSquare.parentNode.appendChild(beingDragged);
            droppingSquare.remove();
        } else if (beingDragged.classList.contains('pawn') && droppingSquare != beingDragged && droppingSquare.id[0] != beingDragged.id[0] && pawnTakingCoordinates.includes(droppingSquare.parentNode.id)) {
            console.log("Pawn on image");
            droppingSquare.parentNode.appendChild(beingDragged);
            droppingSquare.remove();
        }
    }

    else if (droppingSquare.tagName == "DIV") {
        // advancing pieces
        console.log(newCoordinates);

        if (newCoordinates.includes(droppingSquare.id)) {
            droppingSquare.append(beingDragged);

            if (beingDragged.classList.contains("#")) {
                beingDragged.classList.remove("#");
                beingDragged.classList.add("pawn");
            }

            console.log("logic check works");
        }

        else {
            console.log("div didn't hit")
        }

        newCoordinates = [];
    }

    else {
        console.log("unknown");
    }
}

for (let row=0; row<board_size; row++) {
    for (let column=0; column<board_size; column++) {
        const square = document.createElement('div');

        square.classList.add('square');

        if ((row+column) % 2 === 0) {
            square.classList.add('light');
        } else {
            square.classList.add('dark');
        }

        square.id = column_ties[column] + row_ties[row];

        // adding event to each square
        square.addEventListener('dragover', dragOver);
        square.addEventListener('drop', dragDrop);
        square.addEventListener('click', (e) => {
            console.log(e.target);
            if (e.target.id == "w") {
                console.log('white big fat ass king\'s pecents');
            } else if (e.target.id == "b") {
                console.log('it is nigga');
            } else {
                console.log("it is on board");
            }
        });

        const pieceCode = initialBoard[row][column];

        if (pieceCode) {
            const pieceImage = document.createElement('img');
            pieceImage.src = pieceImages[pieceCode];
            pieceImage.id = pieceCode[0];

            checkPieceType(pieceCode, pieceImage);
            
            square.appendChild(pieceImage);
            pieceImage.addEventListener('dragstart', dragStart)
        }
        
        chessboard.appendChild(square);
    }
}
