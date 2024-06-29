import styled from 'styled-components';

const breakpoints = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px'
};

const Page = styled.div`
  margin: 0 auto;
  padding: 16px;

  @media (min-width: ${breakpoints.mobile}) {
    width: 100%;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 80%;
    flex-direction: row;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 60%;
  }
`;

export default Page;
