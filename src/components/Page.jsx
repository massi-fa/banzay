import React from 'react';
import styled from 'styled-components';
import instagram from '../res/instagram.svg';
import tiktok from '../res/tiktok.png';
import paypal from '../res/paypal.svg';
import TikTokcmp from './TikTokcmp';
import whatsapp from '../res/whatsapp.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 70px;
`;
const H1 = styled.h1`
  font-size: 1.1em;
  margin: auto;
  color: white;
  text-align: center;
  margin: 0px 25px 0px 25px;
`;
const H11 = styled.h1`
  font-size: 0.9em;
  margin: auto;
  color: #202434;
  text-align: center;
  margin: auto;
`;
const LinkContainer = styled.div`
  margin: 20px auto 5px auto;
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ImageLink = styled.img`
  height: 4rem;
  margin: 20px;
`;
const TikTokContainer = styled.div`
  padding: 5px;
`;
const Support = styled.div`
  padding: 10px;
  border-radius: 20px;
  background-color: #fb4454;
  margin: 0px auto 15px auto;
  display: flex;
  flex-direction: row;
  height: 7rem;
  width: 70%;
`;
const SupportImagesC = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const SupportImageW = styled.img`
  height: 4rem;
  margin: auto 10px auto;
`;
const SupportImageP = styled.img`
  height: 4rem;
  margin: auto 10px auto;
`;
const B = styled.span`
  font-size: 1em;
  margin: auto;
  color: white;
  text-align: center;
  margin: auto;
  color: white;
`;
const Page = () => ( 
  <Container>
    <TikTokContainer>
      <H1>Ti sei perso il mio ultimo video !?</H1>
      <TikTokcmp />
    </TikTokContainer>
    <LinkContainer>
      <H1>Ricordati che dovresti seguimi ovunque !?</H1>
      <ButtonContainer>
        <ImageLink src={tiktok} />
        <ImageLink src={instagram} />
      </ButtonContainer>
    </LinkContainer>
    <Support>
      <H11>Perchè non <br/><B>mi condividi</B><br/>!?</H11>
      <SupportImagesC>
        <SupportImageW src={whatsapp} />
      </SupportImagesC>
    </Support>
    <Support>
      <H11>Se proprio <br/><B>mi ami</B><br/>!?</H11>
      <SupportImageP src={paypal} />
    </Support>
  </Container>
);

export default Page;