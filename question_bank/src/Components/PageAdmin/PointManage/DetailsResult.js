import React,{Component} from 'react';

class DetailsResult extends Component{
    render(){
        let {tests,exams}=this.props;
        return(
            this.show(tests,exams)
           
        )
    }
    show(tests,exams){
        console.log(tests)
        var result=null;
        if(exams.length>0){
            result=exams[0].map((ex,index)=>{
                console.log(ex);
                var item =  tests.filter(function(it) {
                    return it.question == ex
                });
                console.log(item);
                var item1 =  item.filter(function(it) {
                    return Number(it.core) == 1
                });
                let len=item.length;
                let len1=item1.length;
                var count=0;
                console.log(len1)
                console.log(len);
                if(len>0){
                    count=len1+"/("+len+")";
                }
                    return <td>{count}</td>
            })
         
        }
        return result;
    }

}
export default DetailsResult;