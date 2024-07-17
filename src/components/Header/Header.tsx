import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 0;
  margin: 0;
`;

const StyledHeaderText = styled.h1`
  font-size: 34px;
  color: #ffffff;
  font-weight: bold;
  padding: 10px;
  margin: 8px;
  text-shadow: 2px 2px 4px #000000, -2px -2px 4px #deac2d;
`;

export const headerText = "FEMTONPUSSLET";

type HeaderProps = {
    text: string;
};

const Header: React.FC<HeaderProps> = ({ text }) => {
    return (
        <StyledHeader>
            <StyledHeaderText>{text}</StyledHeaderText>
        </StyledHeader>
    );
};

export default Header;