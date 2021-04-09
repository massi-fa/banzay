import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 100px;
`;

const ContainerCard = styled.div`
  width: 60%;
  margin: 20px auto 20px auto;
  border: 2px solid;
  border-radius: 15px;
  border-color: white;
`;

const CardFlip = () =>{
  const [flipped,setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(!flipped);
  };
  return(
    <Container>
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <ContainerCard>
          <h1>ciaoio</h1>
          <button onClick={handleClick}>ciaooo</button>
        </ContainerCard>
        <ContainerCard>
          <h1>ciao2</h1>
          <h1>ciaoio</h1>
          <button onClick={handleClick}>ciaooo2</button>
        </ContainerCard>
      </ReactCardFlip>
    </Container>
  );
}

export default CardFlip;