import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Page from './components/Page';
import logo from './res/logo.png';
import decoration from './res/tnt.svg';

const Container = styled.div`
  background-color:#d01414;
  height: 100%;
  width: 100%;
  bottom: 0px;
  position: absolute;
`;
const StyledLogo = styled.img`
  max-height: 70px;
  margin: 3px 20px 3px 20px;
`;
const Decoration =  styled.img`
  max-height: 45px;
  margin: ${(props) => (props.condition === 'gira' ? 'auto 25px auto auto' : 'auto auto auto 25px;')};
  transform: ${(props) => (props.condition === 'gira' ? 'scale(-1, 1)' : 'scale(1, 1)')};
`;
const Header = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: rgb(20 20 20) 2px 2px 30px 0px;
`;
const App = () =>{
  return ( 
    <Container>
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
