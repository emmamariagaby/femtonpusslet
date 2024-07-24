import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tile from './components/Tile/Tile';
import Shuffle, { generateNumbersGrid, shuffleText } from './components/Shuffle/Shuffle';
import PuzzleSolvedIndicator, {solvedText} from './components/PuzzleSolvedIndicator/PuzzleSolvedIndicator';

const StyledPuzzle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-width: 450px;
  margin: 0 auto;
`;

const Puzzle: React.FC = () => {
    const [grid, setGrid] = useState<number[]>(generateNumbersGrid());
    const [clickCount, setClickCount] = useState<number>(0);

    useEffect(() => {
        console.log("Antal klick:", clickCount);
    }, [clickCount]);

    const handleTileClick = (index: number) => {
        const newGrid = [...grid];
        const emptyIndex = newGrid.indexOf(0);

        const row = Math.floor(index / 4);
        const emptyRow = Math.floor(emptyIndex / 4);
        const column = index % 4;
        const emptyColumn = emptyIndex % 4;

        const moveTile =
            (row === emptyRow && Math.abs(column - emptyColumn) === 1) ||
            (column === emptyColumn && Math.abs(row - emptyRow) === 1);

        if (moveTile) {
            newGrid[emptyIndex] = newGrid[index];
            newGrid[index] = 0;
            setGrid(newGrid);
            setClickCount(prevCount => prevCount + 1);
        }
    };

    const shuffleNumbers = () => {
        setGrid(generateNumbersGrid());
        setClickCount(0);
    };

    return (
        <StyledPuzzle>
        <StyledGrid>
            {grid.map((number, index) => (
                <Tile
                    key={index}
                    number={number}
                    empty={number === 0}
                    onClick={() => handleTileClick(index)}
                />
            ))}
        </StyledGrid>
    <Shuffle onClick={shuffleNumbers} text={shuffleText} />
            <PuzzleSolvedIndicator grid={grid} text={solvedText} clickCount={clickCount} playAgain={shuffleNumbers} />
        </StyledPuzzle>
    );
};

export default Puzzle;
