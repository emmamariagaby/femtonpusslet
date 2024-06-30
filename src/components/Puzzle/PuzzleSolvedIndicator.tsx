import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Message = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #dff0d8;
  color: #3c763d;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
`;

export const solvedText = "Grattis! Du har löst pusslet!";

type PuzzleSolvedIndicatorProps = {
    text: string;
    grid: number[];
};

// komponenten PuzzleSolvedIndicator tittar om pusslet är löst och visar ett meddelande om det är sant
const PuzzleSolvedIndicator: React.FC<PuzzleSolvedIndicatorProps> = ({ grid, text}) => {
    // useState-hook för att skapa ett tillstånd som hanterar om pusslet är löst
    const [solved, setSolved] = useState<boolean>(false);

    useEffect(() => {
        // tittar om siffror i gridet är i rätt ordning för att avgöra om pusslet är löst
        const isSolved = grid.every((number, index) => number === (index + 1) % 16);
        setSolved(isSolved);
    }, [grid]);

    // returnerar meddelande om pusslet är löst, annars null
    return solved ? <Message>{text}</Message> : null;
};

export default PuzzleSolvedIndicator;
