import React,{Component} from 'react';
export default class AnsewerQuestion extends Component{
  render(){
    var {item,index}=this.props;
      return(
            this.showitem(item,index)
      )
  };
  showitem(item,index){
return(
              <div className="answer">
                  <label>A. {item[0].Content}</label>
                  <label>B. {item[1].Content}</label>
                  <label>C. {item[2].Content}</label>
                  <label>D. {item[3].Content}</label>
              </div>
          )
  }
}