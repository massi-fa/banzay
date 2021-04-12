import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const H1 = styled.h1`
  color: white;
  font-size:0.5rem;
  margin: 5px;
`;
const BottomCprt = () =>(
  <Container>
    <H1>Per info premi sul logo in alto a sinistra</H1>
    <H1>© 2021 Banzay.tv by MassiFa</H1>
  </Container>
);

export default BottomCprt;