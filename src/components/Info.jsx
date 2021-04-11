import React from 'react'
import styled from 'styled-components/macro';

const Container = styled.div`
	margin-top: 100px;
	padding:15px;
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
const Info = () => (
	<Container>
		<BoxInfo>
			<H1>Email</H1>
			<H11>massifadda99@gmail.com</H11>
			<H1>Telefono</H1>
			<H11>3426910820</H11>
		</BoxInfo>
	</Container>
);

export default Info;