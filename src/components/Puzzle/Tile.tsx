import React from 'react';
import styled from 'styled-components';

const StyledTile = styled.div<{ empty: boolean }>`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: ${({ empty }) => (empty ? '#transparent' : '#116479')};
  border: ${({ empty }) => (empty ? '2px solid #ffffff' : '2px solid #116479')};
  cursor: ${({ empty }) => (empty ? 'default' : 'pointer')};
`;

type TileProps = {
    number: number;
    empty: boolean;
    onClick: () => void;
}

const Tile: React.FC<TileProps> = ({ number, empty, onClick }) => {
    return (
        <StyledTile empty={empty} onClick={onClick}>
            {number !== 0 ? number : ''}
        </StyledTile>
    );
};

export default Tile;
