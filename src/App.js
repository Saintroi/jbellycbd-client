import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { ErrorBoundary, Homepage, Footer, Store } from './components';
import './App.css';

//const Login = React.lazy(() => import('./components'));

// Styles

const theme = {
  backgroundColor: 'rgba(244, 244, 244, 1)',
  altBackgroundColor: 'rgb(230,231,231)',
  vignetteColor: 'rgba(34, 44, 55, 1)',
  accentColor: 'white',
  altAccentColor: 'rgb(87,108,126)',
  acOverlayDark: 'rgba(3,41,56, 1)',
  textColor: 'black',
  altTextColor: 'rgba(130, 152, 163, 1)' 
}

const AppWrapper = styled.div`
  position: relative;
  background-color: ${theme.backgroundColor};
  grid-template-areas:  "content"
  "foot";
  grid-template-columns: auto;
  grid-template-rows: calc(100vh - 100px) 100px;
  height: 100vh;
  overflow-y: scroll;
  gap: 5px;
`;

// JSX
function App(props){
  if (props.location.pathname === '/callback') return;

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <AppWrapper key='app'>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/store' component={Store}/>
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default withRouter(App);
