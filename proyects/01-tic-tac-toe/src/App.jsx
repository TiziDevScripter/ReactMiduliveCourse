import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}
const Square = function({children,updateBoard,index,isSelected}) {
  const className = `square ${isSelected ? 'square--selected' : ''}`
  const handleClick = function() {
    updateBoard(index)
  }
  return (
    <div 
    className={className}
    onClick={handleClick}
    >
      {children}
    </div>
  )
}
const WINNER_POSITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
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
  const checkWinner = function(boardToCheck) {
    for(const position of WINNER_POSITIONS) {
      const [a, b, c] = position; //valor de la posicion
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
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

        {
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
        }
        
      </main>
    </>
  )
}

export default App
