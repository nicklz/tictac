export function calculateWinner(state) {
  console.log('calc', state);
  let i, j, p;

  // Since we're reusing state lets clear this out
  for (p = 0; p < 2; p++) {
    state.scores[p][0] = 0;
    state.scores[p][1] = 0;
    state.scores[p][2] = 0;
    state.scores[p][3] = 0;
  }

  // Loop through the columns
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      // Now loop through the players
      for (p = 0; p < 2; p++) {

        // Reset so we don't get double counts
        if (j === 0) {
          state.scores[p][0] = 0;
          state.scores[p][1] = 0;
        }

        // Are there 3 in a row horizontal?
        if (state.board[i][j] === p) {
          state.scores[p][0]++;
          if (state.scores[p][0] === 3) {
            state.message = `player ${p === 0 ? 'X' : 'O'} wins horizontally`;
          }
        }

        // Are there 3 in a row vertical?
        if (state.board[j][i] === p) {
          state.scores[p][1]++;
          if (state.scores[p][1] === 3) {
            state.message = `player ${p === 0 ? 'X' : 'O'} wins vertically`;
          }
        }

        // Are there 3 in a row diagonal starting from the top left?
        if (i === j) {
          if (state.board[i][j] === p) {
            state.scores[p][2]++;
            if (state.scores[p][2] === 3) {
              state.message = `player ${p === 0 ? 'X' : 'O'} wins diagonally down`;
            }
          }
        }

        // Are there 3 in a row diagonal starting from the bottom left?
        if (i === j) {
          if (state.board[2 - i][j] === p) {
            state.scores[p][3]++;
            if (state.scores[p][3] === 3) {
              state.message = `player ${p === 0 ? 'X' : 'O'} wins diagonally up`;
            }
          }
        }
      }
    }
  }
}

// Since the squares are siblings lets make an easy mapping function 
export function getSquare(board, index) {
  if (index >= 0 && index < 3) {
    return board[0][index];
  }
  else if (index >= 3 && index < 6) {
    return board[1][index - 3];
  }
  else {
    return board[2][index - 6];
  }
}

// Mapping function similar to getSquare but actually sets the value
export function setSquare(state, index, value) {
  if (index >= 0 && index < 3) {
    state.board[0][index] = value;
  }
  else if (index >= 3 && index < 6) {
    state.board[1][index - 3] = value;
  }
  else {
    state.board[2][index - 6] = value;
  }
}
