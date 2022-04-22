import React, { useState } from 'react';
import { calculateWinner, getSquare, setSquare } from '../utils/Helpers';

export const Square = ({ setState, setMessage, state, player, index }, key) => {
  const [move, setSquareDisplay] = useState('');

  return (
    <>
      <div className="square" onClick={(e) => {
        if (getSquare(state.board, index) === null && state.turn < 9) {
          setSquareDisplay(state.player === 0 ? 'X' : 'O');
          setSquare(state, index, state.player);
          calculateWinner(state);
          // Next player
          state.player = state.player === 1 ? 0 : 1;
          state.turn++;
          if (state.message !== '') {
            setMessage(state.message)
          }
          setState(state);

        }

        if (state.message === '' && state.turn === 9) {
          setMessage('Cats game nobody wins')
        }
      }}>
        {move}
      </div>
    </>
  );
};
