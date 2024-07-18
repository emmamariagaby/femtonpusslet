import styled, {keyframes} from 'styled-components';

const breakpoints = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px'
};

const background = keyframes`
  0%, 100% {
    background-position: 0 0, 50px 50px;
  }
  50% {
    background-position: 50px 50px, 0 0;
  }
`;

const Page = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 10px;
  background-color: #7c3338;
  background-image: radial-gradient(circle, #bfc1d9 20px, transparent 20px);
  background-size: 100px 100px;
  animation: ${background} 5s infinite;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  position: relative;
  border-radius: 20%;
  overflow: hidden;

  
  @media (min-width: ${breakpoints.mobile}) {
    width: 90%;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 80%;
    flex-direction: row;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 55%;
  }
`;

export default Page;
