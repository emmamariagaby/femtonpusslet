import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  background-color: #115363;
  color: white;
  border: 2px solid #115363;
  border-radius: 5px;
  padding: 15px 35px;
  font-size: 16px;
  cursor: pointer;
  text-shadow: 2px 2px 4px #000000, -2px -2px 4px #deac2d;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #a7aace;
    border: 2px solid #a7aace;
    transform: translateY(-2px);
  }
`;

export const generateNumbersGrid = (): number[] => {
    const numbers = Array.from({ length: 15 }, (_, i) => i + 1);
    numbers.push(0);
    numbers.sort(() => Math.random() - 0.5);
    return numbers;
};

export const shuffleText = "SLUMPA";

type ShuffleProps = {
    onClick: () => void;
    text: string;
}

const Shuffle: React.FC<ShuffleProps> = ({ onClick, text }) => {
    return (
        <StyledButton onClick={onClick}>{text}</StyledButton>
    );
};

export default Shuffle;
