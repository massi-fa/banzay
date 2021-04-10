import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro';

const Container = styled.div`
  border-radius: 15px;
  border: 1px solid;
  border-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
const H1  = styled.h1`
  font-size: 0.8rem;
  margin: auto;
  color:white;
`;
const TikTokcmp = () => {
  const [data, setData] = useState(null)
  const fetchURL = "https://www.tiktok.com/oembed?url=https://www.tiktok.com/@banzay_tv/video/6949098772857228549"
  const getData = () =>
    fetch(`${fetchURL}/posts`)
      .then((res) => res.json())

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])
  return (
    <Container>
      <div dangerouslySetInnerHTML={{__html: `${data?.html}`}} />
    </Container>
  )
};

export default TikTokcmp;


/*<div>
      {data?.map((item) => 
        <ul>
          <li>{item.title}</li>
        </ul>
      )}
    </div>
*/