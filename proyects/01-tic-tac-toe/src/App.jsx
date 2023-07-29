import { useState } from 'react';
import './App.css';

import { Square } from './components/Square';
import { WinnerModal } from './components/WinnerModal';

import { TURNS } from './constants';
import { checkWinner } from './logic';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = function(index) {
    if(board[index] || winner) return;

    let newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard)

    let newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);
    if(newWinner) {
      setWinner(newWinner);
    }
  }

  const gameReset = function() {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null)
  }

  return (
    <>
      <main className="tictactoe">
        <h2 className='tictactoe__title'>Tic Tac Toe</h2>

        <button 
        className='tictactoe__button-reset' 
        onClick={gameReset}>RESET GAME</button>

        <section className='tictactoe__game'>
          {
            board.map((e,index)=>{
              return (
                <Square 
                key={index} 
                index={index} 
                updateBoard={updateBoard}
                >
                  {e}
                </Square>
              )
            })
          }
        </section>
        
        <section className='tictactoe__turn'>
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>

        <WinnerModal
        winner={winner} 
        gameReset={gameReset}
        ></WinnerModal>
        {/* {
          winner && (
            <section className="tictactoe__winner">
              <div className="winner__modal">
                <h2 className='winner__title'>
                  {
                    winner === false ? 'Enpate' : 'Ganó:'
                  }
                </h2>
                {winner && <Square>{winner}</Square>}
                <button 
                className='winner__button'
                onClick={gameReset}
                >PLAY AGAIN</button>
              </div>
            </section>
          )
        } */}
        
      </main>
    </>
  )
}

export default App
