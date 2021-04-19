import React from 'react';
import {Route, Redirect} from 'react-router-dom';
let isLoggedAdmin=localStorage.getItem("admin");
const AdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}  
    render={props =>
      localStorage.getItem("admin") !== null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default AdminRoute;