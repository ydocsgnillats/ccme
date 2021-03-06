import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Settings from '../settings/Settings';
import ProfileForm from '../profile-forms/ProfileForm';
import AddWallet from '../profile-forms/AddWallet';
import Profile from '../profile/Profile';
import NotFound from '../layout/NotFound';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <PrivateRoute exact path="/create-profile" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
        <PrivateRoute exact path="/add-wallet" component={AddWallet} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
