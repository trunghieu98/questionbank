import React,{Component} from 'react';
export default class AnsewerPDF extends Component{
  render(){
    var {item,index,code}=this.props;
      return(
            this.showitem(item,index,code)
      )
  };
  showitem(item,index,code){
    if(Number(code)===1){
      item.sort((a, b) => (a.id > b.id) ? 1 : -1)
     }
     if(code===0){
      item.sort((a, b) => (a.id < b.id) ? 1 : -1)
     }
return(
              <div className="answer" >
                  <label>A. {item[0].Content}</label>
                  <label>B. {item[1].Content}</label>
                  <label>C. {item[2].Content}</label>
                  <label>D. {item[3].Content}</label>
              </div>
          )
  }
}