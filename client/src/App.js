import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';

const App = () => (
  <>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
  </>
)

export default App;