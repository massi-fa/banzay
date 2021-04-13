import styled from 'styled-components/macro';
import { TikTok } from 'react-tiktok';

const Container = styled.div`
  border: 2px solid;
  border-color: white;
  background-color: white;
  border-radius: 15px;
  width: 25rem;
  margin: 10px auto;
  @media all and (max-width: 480px) {
    width: 100%;
  }
`;

const TikTokComponent = () => (
  <Container>
    <TikTok url="https://www.tiktok.com/oembed?url=https://www.tiktok.com/@banzay_tv/video/6949098772857228549" />
  </Container>
)

export default TikTokComponent;