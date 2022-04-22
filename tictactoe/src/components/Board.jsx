import React, { useState } from 'react';
import { uid } from 'react-uid';
import { Square } from './Square';
import { Alert } from './Alert';


export const Board = () => {

  const initState = {
    turn: 0,
    player: 0,
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    scores: [[0, 0, 0, 0], [0, 0, 0, 0]],
    message: ''
  }
  const [state, setState] = useState(initState);
  const [message, setMessage] = useState('');

  return (
    <>
      {message !== '' && (
        <>
          <Alert message={message}></Alert>
        </>
      )}
      <div className="board">
        {Array.from(Array(9)).map((value, index) => {
          return <Square setMessage={setMessage} setState={setState} state={state} index={index} key={uid(index)}></Square>
        })}
      </div>
    </>
  );
};
