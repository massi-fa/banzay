import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Support = styled.button`
  padding: 10px;
  border-radius: 20px;
  background-color: #e74c3c;
  margin: 0px auto 15px auto;
  display: flex;
  flex-direction: row;
  height: 7rem;
  outline: none;
  border: 0px;
  width: 20rem;
  @media all and (max-width: 480px) {
    width: 70%;
  }
`;
const H1 = styled.h1`
  font-size: 1.1em;
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
  font-size: 1.3em;
  margin: auto;
  color: white;
  text-align: center;
  margin: auto;
  color: white;
`;
const ButtonCard = ({ text1, text2, image, fun}) =>(
  <Support onClick={fun}>
      <H1>{text1}<br/><B>{text2}</B><br/>!?</H1>
    <SupportImage src={image} />
  </Support>
);

ButtonCard.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  fun: PropTypes.func,
};

export default ButtonCard;