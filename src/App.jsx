import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { createGlobalStyle } from 'styled-components/macro';
import Page from './components/Page';
import logo from './res/logo.png';
import decoration from './res/tnt.svg';
import sfondo from './res/background.svg';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
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
`;
const StyledLogo = styled.img`
  max-height: 50px;
  margin: 3px 20px 3px 20px;
  transform: rotate(0.5turn);
`;
const Decoration =  styled.img`
  max-height: 25px;
  margin: ${(props) => (props.condition === 'gira' ? 'auto 25px auto auto' : 'auto auto auto 25px;')};
  transform: ${(props) => (props.condition === 'gira' ? 'scale(-1, 1)' : 'scale(1, 1)')};
  transform: rotate(0.5turn);
`;
const Header = styled.div`
  background-color:#fb4454;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 0px 0px 5px 5px;
  width: 100%;
  height: 55px;
  border-radius: 300% / 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform: rotate(0.5turn);
`;
const App = () =>{
  return (  
    <Container>
      <GlobalStyle/>
      <Header>
        <Decoration src={decoration} condition='gira' />
        <StyledLogo src={logo} alt='Error!' />
        <Decoration src={decoration} />
      </Header>
      <Page />
    </Container>
  )
};

export default App;
