import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Play, { playText } from '../Play/Play';

const breakpoints = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px'
};

const StyledMessage = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  background-color:  #7c3338;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 34px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 44px;
  }
`;

export const solvedText = "GRATTIS TILL VINSTEN!";
export const clickCountText = (clickCount: number) => `DU LÖSTE PUSSLET MED ${clickCount} KLICK.`;

type PuzzleSolvedIndicatorProps = {
    text: string;
    grid: number[];
    clickCount: number;
    playAgain: () => void;
};

const PuzzleSolvedIndicator: React.FC<PuzzleSolvedIndicatorProps> = ({ grid, text, clickCount, playAgain}) => {
    const [solved, setSolved] = useState<boolean>(false);

    useEffect(() => {
        const isSolved = grid.every((number, index) => number === (index + 1) % 16);
        setSolved(isSolved);
    }, [grid]);

    return solved ? <StyledMessage><div>{text}</div>
        <div>{clickCountText(clickCount)}</div><Play onClick={() => {
            setSolved(false);
            playAgain();
        }} text={playText} /></StyledMessage> : null;
};

export default PuzzleSolvedIndicator;
