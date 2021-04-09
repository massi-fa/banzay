import React from 'react';
import styled from 'styled-components';
import instagram from '../res/instagram.png';
import tiktok from '../res/tiktok.png';
import paypal from '../res/paypal.png';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Block = styled.div`
  margin-top: 50px;
`;
const ContainerNote = styled.div`
  width: 60%;
  margin: 20px auto 20px auto;
  border: 2px solid;
  border-radius: 15px;
  border-color: white;
  padding: 10px;
  margin: 20px auto 10px auto;
  box-shadow: rgb(51 51 51) 2px 2px 6px 0px;
`;
const H1 = styled.h1`
  color: white;
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
  color: white;
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
  border: 2px solid;
  border-radius: 15px;
  border-color: white;
  box-shadow: rgb(51 51 51) 2px 2px 6px 0px;
  padding: 10px;
`;
const ImageLink = styled.img`
  height: 5rem;
  margin: auto;
`;
const ImageLinkSmall = styled.img`
  height: 2rem;
  margin: auto;
`;
const ContainerSupport = styled.div`
  margin: 20px auto 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 60%;
  border: 2px solid;
  border-radius: 15px;
  border-color: white;
  box-shadow: rgb(51 51 51) 2px 2px 6px 0px;
  padding: 10px;
`;
const Page = () => ( 
  <Container>
    <Block>
      <H11>Le perle di banzay:</H11>
      <ContainerNote>
        <H1>“L'uomo non è fatto per la sconfitta. Un uomo può essere distrutto ma non sconfitto.”</H1>
      </ContainerNote>
    </Block>
    <Block>
      <H11>Se non mi segui fallo ora!?</H11>
      <ContainerLink>
        <ImageLink src={tiktok} />
        <ImageLink src={instagram}/>
      </ContainerLink>
    </Block>
    <Block>
      <H11>Se volessi supportare il progetto</H11>
      <ContainerSupport>
        <H12>Premi qui per supportare:</H12>
        <ImageLinkSmall src={paypal} />
      </ContainerSupport>   
    </Block>
  </Container>
);

export default Page;