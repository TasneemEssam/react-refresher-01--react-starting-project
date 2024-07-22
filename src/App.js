// here i import BrowserRouter and renamed as Router from package called react
// the route component used to root as JS code
// switch component is cann be wrapped arount the root definitions
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

const App = () => {
//here we caan used tht router in app component as root JS element
//whenever i refresch my port /3000 and if i tried to write /3000/anything at the end it will give me the same route due to 
// by default this path is treated as a filter, which means any path that start with this "path="/">" will render users
// by seting the "path="/" exact" it means the exact path of the user as whatever i am gonna add after the slash it won't get the same thing
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};
// redirect is self-closing component
//what react route will do when the URL changes it will go through all the routes we have set up here and will see if the path is nothing we will render that "<Users />"
// if the path is anything else will not trigger and instead redirect and will kick in and will redirect to "<Redirect to="/" />" us back to slash nothing "will directed to the same port"

//so before the starting root and after redirect and this now instructs react router that inside of the switch block whenever it encounters a fitting root, the it will evaluate the lines & won;t redirect if it was able to identify the path and hence rendered this new place compponent 

export default App;
