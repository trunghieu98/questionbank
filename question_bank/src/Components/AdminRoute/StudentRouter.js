import React from 'react';
import {Route, Redirect} from 'react-router-dom';
let isLoggedAdmin=localStorage.getItem("user");
const StudentRouter = ({ component: Component, ...rest }) => (
    <Route {...rest}  
    render={props =>
      localStorage.getItem("user") !== null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default StudentRouter;