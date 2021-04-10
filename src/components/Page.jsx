import React from 'react';
import styled from 'styled-components';
import instagram from '../res/instagram.png';
import tiktok from '../res/tiktok.png';
import paypal from '../res/paypal.png';
import TikTokcmp from './TikTokcmp';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const PContainer = styled.div`
  padding: 5px;
  border-radius: 20px;
  background-color: #fb4454;
  width: 80%;
  margin: 20px auto 5px auto;
`;
const H1 = styled.h1`
  font-size: 1.1em;
  margin: auto;
  color: white;
  text-align: center;
`;
const LinkContainer = styled.div`
  margin: 20px auto 20px auto;
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const ImageLink = styled.img`
  height: 4rem;
  margin: 10px auto;
`;
const TikTokContainer = styled.div`
  padding: 5px;
`;
const Support = styled.div`
  width: 60%;
  padding: 5px;
  border-radius: 20px;
  background-color: #fb4454;
  margin: 20px auto 15px auto;
  display: flex;
  flex-direction: column;
`;
const SupportImage = styled.img`
  width: 6rem;
  margin: 10px auto;
`;
const Page = () => ( 
  <Container>
    <TikTokContainer>
      <PContainer>
        <H1>Ti sei perso i miei ultimi video!?</H1>
      </PContainer>
      <TikTokcmp />
    </TikTokContainer>
    <LinkContainer>
      <PContainer>
        <H1>Ricordati che dovresti seguimi ovunque!?</H1>
        <ButtonContainer>
          <ImageLink src={tiktok} />
          <ImageLink src={instagram} />
        </ButtonContainer>
      </PContainer>
    </LinkContainer>
    <Support>
      <H1>Se proprio mi ami!?</H1>
      <SupportImage src={paypal} />
    </Support>
  </Container>
);

export default Page;