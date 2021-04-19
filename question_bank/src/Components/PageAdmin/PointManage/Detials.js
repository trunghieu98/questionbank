import React,{Component} from 'react';
import CallApi from '../../../utils/apiCaller';

class Details extends Component{
    constructor(props){
        super(props);
        this.state={
            quess:""
        }
    }
    handleShowQS=(id)=>{
        console.log(id);
        let obj={
                "Id_quesstion":   [id]
        }
        CallApi("v1/quesstion/id","POST",obj).then(res=>{
            console.log(res.data.details);
            this.setState({
                quess: res.data.details[0]
            })
        })
;    }
    render(){
        let {tests,exams}=this.props;
        let {quess}=this.state;
        return(
           this.show(tests,exams, quess)
           
        )
    }
    show(tests,exams, quess){
        var core=10/exams[0].length;
        var result=null;
        
        result=exams[0].map((ex,index)=>{
            
            if(Number(ex)=== Number(tests.question)){
                
                if(Number(tests.core)===1){
                    return(
                        <td key={index}  className="color-success"> <span onClick={()=>this.handleShowQS(tests.question)}>{core}<i className="fas fa-check"></i>
                         { quess!==""? <div className="show-questionid">
                        <span className="quesstion-text"> { quess.Name_quesstion}</span>
                        </div>: null}
                        </span></td>
                    )
                }
                else{
                    return(
                        <td key={index} className="color-danger" ><span onClick={()=>this.handleShowQS(tests.question)}> {core} <i className="fas fa-times"></i>
                         { quess!==""? <div className="show-questionid">
                        <span className="quesstion-text"> { quess.Name_quesstion}</span>
                        </div>: null}</span></td>
                    )
                }
            }
        })
        return result;
    }

}
export default Details;