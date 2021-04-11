import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro';

import screen from '../res/screen.PNG';

const Container = styled.div`
  margin: 0px auto auto auto;
  border: 1px solid;
  background-color: #fb4454;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: transparent;
`;
const Image = styled.img`
  height: 16rem;
  margin: 5px auto 10px auto;
  box-shadow: rgb(51 51 51) 2px 2px 10px 0px;
`;
const H1  = styled.h1`
  font-size: 0.8rem;
  margin: 5px auto;
  color:white;
  text-align: center;
`;
const TikTokcmp = () => {
  const [data, setData] = useState(null)
  const fetchURL = "https://www.tiktok.com/oembed?url=https://www.tiktok.com/@banzay_tv/video/6949098772857228549"
  const getData = () =>
    fetch(`${fetchURL}/posts`)
      .then((res) => res.json())

  useEffect(() => {
    getData().then((data) => setData(data))
  }, []);
  const Slice = (stringa) =>{
    const pos = stringa?.indexOf('#')
    const res = stringa?.slice(0, pos);
    return(res);
  }
  const title = data?.title;
  return (
    <Container>
      <Image src={screen}/>
      <H1>{Slice(title)}</H1>
    </Container>
  )
};

export default TikTokcmp;


/*
<div dangerouslySetInnerHTML={{__html: `${data?.html}`}} />
*/