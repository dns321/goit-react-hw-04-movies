import React, { Suspense, lazy } from 'react';
import './App.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppBar from './appBar/AppBar';
import Section from '../Components/section/Section';
import Loader from 'react-loader-spinner';
import { mainRoutes } from '../routes/mainRoutes';

const App = () => (
  <>
    <Section>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          {mainRoutes.map(({ path, exact, component }) => (
            <Route exact={exact} path={path} component={component} key={path} />
          ))}
          <Redirect from="" to="/" />
        </Switch>
      </Suspense>
    </Section>
  </>
);

export default App;
