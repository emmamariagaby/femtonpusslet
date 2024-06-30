import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  color: #000000;
`;

const StyledHeaderText = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const headerText = "Klassiska 15-pusslet!";

// props som huvudrubrik tar emot
type HeaderProps = {
    text: string;
};

// komponenten huvudrubrik tar emot props och renderar css från styled component
const Header: React.FC<HeaderProps> = ({ text }) => {
    return (
        <StyledHeader>
            <StyledHeaderText>{text}</StyledHeaderText>
        </StyledHeader>
    );
};

export default Header;