import React from 'react';
import styled from 'styled-components';

const breakpoints = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px'
};

const StyledTile = styled.div<{ empty: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: ${({ empty }) => (empty ? '#transparent' : '#116479')};
  border: ${({ empty }) => (empty ? '2px solid #ffffff' : '2px solid #116479')};
  cursor: ${({ empty }) => (empty ? 'default' : 'pointer')};
  
  @media (min-width: ${breakpoints.mobile}) {
    width: 70px;
    height: 70px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 90px;
    height: 90px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 100px;
    height: 100px;
  }
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
