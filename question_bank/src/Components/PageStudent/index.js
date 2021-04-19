import React,{Component} from 'react';
import {Link, Route} from 'react-router-dom';
import StudentHeader from './StudentHeader';
import Menu from './Menu';
import IndexTest from './Test/IndexTest';
import Test from './Test/Test';
import StudentRouter from '../AdminRoute/StudentRouter';
class PageStudent extends Component{
    render(){
        return(
              <div>
                  <StudentRouter exact path="/student" component={IndexTest} />
                    <StudentRouter exact path="/student/test-start" component={Test} />
                 
              </div>
        )
    };  
}
export default PageStudent;