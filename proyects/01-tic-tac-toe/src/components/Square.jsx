import './Square.css';

export const Square = function({children,updateBoard,index,isSelected}) {
    const className = `square ${isSelected ? 'square--selected' : ''}`;

    const handleClick = function() {
        updateBoard(index);
    };

    return (
        <div className={className} onClick={handleClick}>{ children }</div>
    );
};