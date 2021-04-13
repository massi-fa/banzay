import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components/macro';
import BottomCprt from './components/BottomCprt';
import Header from './components/Header';
import Home from './components/Home';
import Info from './components/Info';
import pattern from './res/pattern.svg';

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
  //background-image:url(${pattern});
  height: 100%;
  width: 100%;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const App = () =>{
  return (  
    <Container>
      <GlobalStyle/>
      <Router>
        <Header />
        <Switch>
          <Route path="/informations">
            <Info />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>  
      <BottomCprt />
    </Container>
  )
};

export default App;
