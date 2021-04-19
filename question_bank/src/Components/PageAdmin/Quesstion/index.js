import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import AddNewQuesstion from './AddNewQuesstion';
class Quesstion extends Component{
    render(){
        return(
            <div>
                <div>
                    <Route  exact path="/" component={AddNewQuesstion} />
                </div>
            </div>
        )
    };  
}
export default Quesstion;