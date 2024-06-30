import React, { useState } from 'react';
import styled from 'styled-components';
import Tile from './Tile';
import Shuffle, { generateNumbersGrid, shuffleText } from './Shuffle';
import PuzzleSolvedIndicator, {solvedText} from './PuzzleSolvedIndicator';

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
  max-width: 240px;
  margin: 0 auto;
`;

// komponenten Puzzle hanterar rendering av Grid, Tile, Shuffle och PuzzleSolvedIndicator
const Puzzle: React.FC = () => {
    // useState-hook för att skapa ett tillstånd som hanterar gridet för pusslet
    const [grid, setGrid] = useState<number[]>(generateNumbersGrid());

    // funktion som hanterar när en bricka klickas på
    const handleTileClick = (index: number) => {
        // skapar en kopia av nuvarande gridet för att kunna göra uppdateringar och sätta dom
        const newGrid = [...grid];
        // hittar index för den tomma brickan
        const emptyIndex = newGrid.indexOf(0);

        // matematik för vilken rad klickad bricka är på
        const row = Math.floor(index / 4);
        // matematik för vilken rad tom bricka är på
        const emptyRow = Math.floor(emptyIndex / 4);
        // matematik för vilken kolumn klickad bricka är på
        const column = index % 4;
        // matematik för vilken kolumn tom bricka är på
        const emptyColumn = emptyIndex % 4;

        // tittar om den bricka som är klickad på kan flyttas till tom ruta
        const moveTile =
            (row === emptyRow && Math.abs(column - emptyColumn) === 1) ||
            (column === emptyColumn && Math.abs(row - emptyRow) === 1);

        // om bricka kan flyttas
        if (moveTile) {
            // byt plats på den tomma rutan och den klickade brickan
            newGrid[emptyIndex] = newGrid[index];
            newGrid[index] = 0;
            // uppdatera gridet
            setGrid(newGrid);
        }
    };

    // funktion för att blanda brickor med nummer
    const shuffleNumbers = () => {
        setGrid(generateNumbersGrid());
    };

    return (
        <StyledPuzzle>
        <StyledGrid>
            {/* Itererar över varje element i grid-arrayen */}
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
            <PuzzleSolvedIndicator grid={grid} text={solvedText} />
        </StyledPuzzle>
    );
};

export default Puzzle;
