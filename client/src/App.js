import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Posts from './components/posts/Posts'; 
import Comments from './components/comments/Comments';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/posts' component={Posts} />
      <Route exact path='/posts/:id/comments' component={Comments} />
      <Route component={Nomatch} />
    </Switch>
  </>
)

export default App;