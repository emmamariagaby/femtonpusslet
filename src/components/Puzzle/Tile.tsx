import React from 'react';
import styled from 'styled-components';

// styled div för varje bricka med olika bakgrundsfärg och muspekare beroende på om brickan är tom eller inte
// styr detta genom flaggan empty
const StyledTile = styled.div<{ empty: boolean }>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ empty }) => (empty ? 'white' : 'lightgrey')}; // Om empty är true, sätt bakgrundsfärgen till vit, annars till ljusgrå
  border: 1px solid #ccc;
  cursor: ${({ empty }) => (empty ? 'default' : 'pointer')}; // Om empty är true, sätt muspekaren till default, annars till pointer
`;

type TileProps = {
    number: number;
    empty: boolean;
    onClick: () => void;
}

// komponenten Tile tar emot props och renderar en bricka med ett nummer
const Tile: React.FC<TileProps> = ({ number, empty, onClick }) => {
    return (
        <StyledTile empty={empty} onClick={onClick}>
             {/*Om number inte är 0, visa numret. Om number är 0, visa en tom string */}
            {number !== 0 ? number : ''}
        </StyledTile>
    );
};

export default Tile;
