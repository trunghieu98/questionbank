import React,{Component} from 'react';
import MathJax from 'react-mathjax-preview';
export default class Item extends Component{
    render(){
      var {item}=this.props;
        return(
              this.showitem(item)
        )
    };
    showitem(item){
      let kq1=null,kq2=null,kq3=null,kq4=null;
  
     if(item!==undefined){
       if(item.length>0){
        if(item[0].Diem==="1"){

          kq1=<label style={{color: 'red'}}>A. {}{ <MathJax math={item[0].Content} />}</label>;
        }
        else{
          kq1=<label>A. { <MathJax math={item[0].Content} />}</label>;
        }
        if(item[1].Diem==="1"){
          kq2=<label style={{color: 'red'}}>B. { <MathJax math={item[1].Content} />}</label>;
        }
        else{
          kq2=<label>B. { <MathJax math={item[1].Content} />}</label>;
        }
        if(item[2].Diem==="1"){
          kq3=<label style={{color: 'red'}}>C.{ <MathJax math={item[2].Content} />}</label>;
        }
        else{
          kq3=<label>C. { <MathJax math={item[2].Content} />}</label>;
        }
        if(item[3].Diem==="1"){
          kq4=<label style={{color: 'red'}}>D. { <MathJax math={item[3].Content} />}</label>;
        }
        else{
          kq4=<label>A.{<MathJax math={item[3].Content} />}</label>;
        }
       }
     }

     
  return(
                <div className="answer">
                   {kq1}{kq2}{kq3}{kq4}
                </div>
            )
    }
  }