import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  margin-top: 30px;
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

export const playText = "SPELA IGEN";

type PlayProps = {
    onClick: () => void;
    text: string;
};

const Play: React.FC<PlayProps> = ({ onClick, text }) => {
    return (
        <StyledButton onClick={onClick}>
            {text}
        </StyledButton>
    );
};

export default Play;
