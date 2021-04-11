import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  width: 100%;
`;
const H1 = styled.h1`
  color: white;
  font-size:0.5rem;
  margin-right: 20px;
  text-align: end;
`;
const BottomCprt = () =>(
  <Container>
    <H1>© 2021 Banzay.tv by MassiFa</H1>
  </Container>
);

export default BottomCprt;