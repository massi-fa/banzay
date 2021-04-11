import React from 'react'
import styled from 'styled-components/macro';
import { useHistory } from "react-router-dom";
import back from '../res/back.svg';

const Container = styled.div`
	margin-top: 100px;
	padding:15px;
  display: flex;
  flex-direction: column;
`;
const BoxInfo = styled.div`
	margin: auto;
`;
const H1 = styled.h1`
	color: white;
	font-size: 2rem;
	text-align: center;
	margin-top: 10px;
`;
const H11 = styled.h1`
	color: white;
	font-size: 1rem;
	text-align: center;
	margin-top: 10px;
`;
const Image = styled.img`
  height: 5rem;
  margin: 40px auto;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  z-index: 3;
`;
const Info = () =>{
	const history = useHistory();
	const handleClickBack = () =>{
    history.push("/")
	};
  return(
    <Container>
      <BoxInfo>
        <H1>😈Email😈</H1>
        <H11>💣alby777@gmail.com💣</H11>
        <H1>😈Telefono😈</H1>
        <H11>💣3317824586💣</H11>
      </BoxInfo>
      <Button onClick={handleClickBack}>
        <Image src={back} />
      </Button>
    </Container>
  );
};

export default Info;