import { WINNER_POSITIONS } from "./constants";

export const checkWinner = function(boardToCheck) {
    for(const position of WINNER_POSITIONS) {
      const [a, b, c] = position; //valor de la posicion
        if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a];
        };
    };
    return null;
};