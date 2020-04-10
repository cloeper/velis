import React, { useEffect } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { browserHistory } from '../browserHistory';

import styled from 'styled-components';
import { appActions } from './App.actions';

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appActions.initAppData());
  });

  return (
    <AppWrapper>
      <CssBaseline />
      <Router history={browserHistory}>
        <Switch>
          <Route path="/home">HOME</Route>
          <Redirect strict from="/" to="/home" />
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
