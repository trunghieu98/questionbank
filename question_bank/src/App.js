import React from 'react';
import PageAdmin from './Components/PageAdmin';
import  Formlogin from './Components/Login/Formlogin';
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Page_Main from './Components/Page_Main';
import AdminRoute from './Components/AdminRoute/AdminRoutes';
import './App.css';
import PageStudent from './Components/PageStudent';
import StudentRouter from './Components/AdminRoute/StudentRouter';
function App() {
  return (
   
    <Router>
        <div className="wrapper">
            <Switch>
                {/* <Route   path="/"  component={PageMain} /> */}
                <Route exact path="/"  component={Page_Main} />
                <Route exact path="/login" component={Formlogin} />
                <AdminRoute  path="/admin" component={PageAdmin} />
                <Route path="/student"  component={PageStudent} />
                
                {/* <StudentRouter exact path="/student"  component={PageStudent} /> */}
            </Switch>
           
        </div>
        
    </Router>
  );  
}
export default App;
