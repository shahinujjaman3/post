import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';
import PostDetails from './components/PostDetails/PostDetails';


function App() {
  return (
    <Router>
      <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
     
          <Route path='/post/:postId'>
            <PostDetails></PostDetails>
          </Route>
    
          <Route exact path='/'>
            <Home></Home>
          </Route>
   
          <Route path='*'>
            <NotMatch></NotMatch>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
