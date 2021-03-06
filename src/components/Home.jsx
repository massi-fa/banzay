import React from 'react';
import styled from 'styled-components/macro';
import ButtonCard from './ButtonCard';
import instagram from '../res/instagram.svg';
import tiktok from '../res/tiktok.png';
import paypal from '../res/paypal.svg';
import whatsapp from '../res/whatsapp.svg';
import TikTok from './TikTokComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 80px;
`;
const H1 = styled.h1`
  font-size: 1.1em;
  margin: auto;
  color: white;
  text-align: center;
  margin: 0px 25px 0px 25px;
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
const Button = styled.a`
  background-color: transparent;
  outline: none;
  text-decoration: none
`;
const ImageLink = styled.img`
  height: 4rem;
  margin: 20px;
`;
const TikTokContainer = styled.div`
  padding: 5px;
`;
const Home = () => {
  const Whatsfun= () =>(window.location.href = 'whatsapp://send?text=https://gallant-elion-2fae74.netlify.app/ Ciao mi chiamo banzay e faccio i tik tok. Se vuoi vieni a trovarmi qui  ');
  return(
    <Container>
        <TikTokContainer>
          <H1>😈Ti sei perso il mio😈<br/>😈ultimo video !?😈 </H1>
          <TikTok />
        </TikTokContainer>
        <LinkContainer>
          <H1>😈Ricordati di😈<br/>😈seguirmi ovunque !?😈</H1>
          <ButtonContainer>
            <Button href='https://vm.tiktok.com/ZMemUaYLF/'>
              <ImageLink src={tiktok} />
            </Button>
            <Button href='https://instagram.com/banzai2k'>
              <ImageLink src={instagram} />
            </Button>
          </ButtonContainer>
        </LinkContainer>
        <ButtonCard text1="Perchè non" text2="mi condividi" image={whatsapp} fun={Whatsfun}/>
        <Button href="https://www.paypal.com/paypalme/BanzayTv">
          <ButtonCard text1="Se proprio" text2="mi ami" image={paypal}/>
        </Button>
      </Container>
  );
};

export default Home;