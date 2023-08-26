import styled from 'styled-components';

const Header = styled.header`
  padding-top: 60px;
  font-size: 60px;
  font-weight: bold;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  height: 70vh;
`;
const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  font-size: 16px;
`;

export { Header, Main, Footer };
