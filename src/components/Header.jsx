import React from 'react';
import styled from 'styled-components/macro';
import logo from '../res/logo.png';
import decoration from '../res/tnt.svg';

const Container = styled.div`
  background-color: #202434;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  position: absolute;
  display: flex;
  justify-content: space-between;
`;
const StyledLogo = styled.img`
  max-height: 50px;
  margin: auto auto auto 0px;
`;
const Decoration =  styled.img`
  max-height: 35px;
  margin: auto 0px auto auto;
`;
const Header = () =>(
  <Container>
    <StyledLogo src={logo} />
    <Decoration src={decoration} />
  </Container>
);

export default Header;