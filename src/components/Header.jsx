import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components/macro';
import logo from '../res/logo.png';
import decoration from '../res/tnt.svg';
import info from '../res/info.svg';
//import mail from '../res/mail.svg';

const Container = styled.div`
  position: absolute;
  width:100%;
  background-color: transparent;
  border: none;
  outline: none;
`;
const ContainerButton = styled.div`
  background-color: #202434;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;
const ContainerNavBar = styled.div`
  display: flex;
  width: ${(props) => (props.condition ? '0%' : '60%')};
  overflow: hidden;
  position: absolute; 
  flex-direction: row;
  justify-content: start;
  padding: 5px;
  margin-left: ${(props) => (props.condition ? '15px' : '80px')};
  transition: all .7s;
`;
const NBImage = styled.img`
  height: 40px;
  margin-top: 20px;
  margin-right: 5px;
  z-index: 1;
`;
const ButtonN = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  z-index: 1;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  z-index: 3;
`;
const StyledLogo = styled.img`
  max-height: 60px;
  margin: auto auto auto 0px;
  transition: transform .5s ease-in-out;
  transform: ${(props) => (props.condition ? 'rotate(-360deg)' : '')};
  
`;
const Decoration =  styled.img`
  max-height: 35px;
  margin: auto 0px auto auto;
`;
const Header = () =>{
  const history = useHistory();
	const handleClick = () =>{
    history.push("/informations")
	};
  const [NavBar,setNavBar] = useState(true);
  const OpenClose = () =>{
    setNavBar(!NavBar)
    console.log(NavBar);
  };
  return(
    <Container onClick={OpenClose}>
      <ContainerNavBar condition={NavBar}>
        <ButtonN onClick={handleClick}>
          <NBImage src={info} />
        </ButtonN>
      </ContainerNavBar>
      <ContainerButton>
        <Button onClick={OpenClose}>
            <StyledLogo src={logo} condition={NavBar}/>
        </Button>
        <Decoration src={decoration} />
      </ContainerButton>
    </Container>
  )
};

export default Header;

/*
<ContainerNavBar >
  <NBImage src={info} />
  <NBImage src={mail} />
</ContainerNavBar>
*/