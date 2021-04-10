import React from 'react';
import styled from 'styled-components';
import instagram from '../res/instagram.png';
import tiktok from '../res/tiktok.png';

import TikTokcmp from './TikTokcmp';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

/* import paypal from '../res/paypal.png';

const Block = styled.div`
  margin-top: 50px;
`;
const ContainerNote = styled.div`
  width: 60%;
  margin: 20px auto 20px auto;
  padding: 10px;
  margin: 20px auto 10px auto;
`;
const H1 = styled.h1`
  color: #ec4854;
  font-size:1.3rem;
  margin: auto;
  text-align: center;
`;
const H11 = styled.h1`
  color: white;
  font-size:1.3rem;
  margin: 20px auto auto auto;
  font-style: italic;
  margin: auto;
  text-align: center;
`;
const H12 = styled.h1`
  color: #ec4854;
  font-size:0.8rem;
  margin: auto;
  text-align: center;
`;
const ContainerLink = styled.div`
  margin: 20px auto 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 17rem;
  padding: 10px;
`;

const ImageLinkSmall = styled.img`
  height: 2rem;
  margin: auto;
`;
const CardCit = styled.div`
  background-color: #303744;
  height: 60%;
  width: 60%;
  margin: 30px auto auto auto;
  border-radius: 15px;
`;*/
const LinkContainer = styled.div`
  margin: 30px auto auto auto;
`;
const ImageLink = styled.img`
  height: 5rem;
  margin: auto;
`;
const Page = () => ( 
  <Container>
    <TikTokcmp />
    <LinkContainer>
      <ImageLink src={tiktok} />
      <ImageLink src={instagram} />
    </LinkContainer>
  </Container>
);

export default Page;