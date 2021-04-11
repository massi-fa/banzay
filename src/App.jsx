import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { createGlobalStyle } from 'styled-components/macro';
import BottomCprt from './components/BottomCprt';
import Header from './components/Header';
import Page from './components/Page';
import sfondo from './res/background.svg';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    font-family: 'Dela Gothic One', cursive;
  }
  #root {
    height: 100%;
  }
`;
const Container = styled.div`
  background-color: #202434;
  height: 100%;
  width: 100%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const App = () =>{
  return (  
    <Container>
      <GlobalStyle/>
      <Header />
      <Page />
      <BottomCprt />
    </Container>
  )
};

export default App;
