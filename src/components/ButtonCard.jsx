import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

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
const H1 = styled.h1`
  font-size: 0.9em;
  margin: auto;
  color: #202434;
  text-align: center;
  margin: auto;
`;
const SupportImage = styled.img`
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
const ButtonCard = ({ text1, text2, image}) =>(
  <Support>
    <H1>💣{text1}💣<br/>💣<B>{text2}</B>💣<br/>💣!?💣</H1>
    <SupportImage src={image} />
  </Support>
);

ButtonCard.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
};

export default ButtonCard;