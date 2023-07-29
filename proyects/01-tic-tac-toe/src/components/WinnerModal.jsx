import { Square } from "./Square";

export function WinnerModal({winner, gameReset}) {
    if(!winner) return null;
    return (
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