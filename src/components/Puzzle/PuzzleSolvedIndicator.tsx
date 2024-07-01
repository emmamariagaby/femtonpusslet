import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledMessage = styled.div`
  padding: 0;
  margin: 0;
  font-size: 34px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7c3338;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const solvedText = "GRATTIS TILL VINSTEN!";

type PuzzleSolvedIndicatorProps = {
    text: string;
    grid: number[];
};

const PuzzleSolvedIndicator: React.FC<PuzzleSolvedIndicatorProps> = ({ grid, text}) => {
    const [solved, setSolved] = useState<boolean>(false);

    useEffect(() => {
        const isSolved = grid.every((number, index) => number === (index + 1) % 16);
        setSolved(isSolved);
    }, [grid]);

    return solved ? <StyledMessage>{text}</StyledMessage> : null;
};

export default PuzzleSolvedIndicator;
