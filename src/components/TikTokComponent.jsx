import styled from 'styled-components/macro';
import { TikTok } from 'react-tiktok';

const Container = styled.div`
  background-color: #202434;
`;

const TikTokComponent = () => (
  <Container>
    <TikTok url="https://www.tiktok.com/oembed?url=https://www.tiktok.com/@banzay_tv/video/6949098772857228549" />
  </Container>
)

export default TikTokComponent;