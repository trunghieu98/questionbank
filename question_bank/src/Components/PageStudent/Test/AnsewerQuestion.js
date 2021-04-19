import React,{Component} from 'react';
export default class AnsewerQuestion extends Component{
  constructor(props){
    super(props);
    
  }
  render(){
    var {item,index,currentPage,item2,id_quesstion,Id_answer,ch}=this.props;
      return(
          <div>
             {this.showitem(item,index,currentPage,item2,id_quesstion,Id_answer,ch)}
            </div>
      )
  };
  showitem(item,index,currentPage,item2,id_quesstion,Id_answer,ch){
         if(ch===1){
          item.sort((a, b) => (a.Content > b.Content) ? 1 : (a.Content === b.Content) ? ((a.id > b.id) ? 1 : -1) : -1 )
         }
         if(ch===0){
          item.sort((a, b) => (a.id < b.id) ? 1 : -1)
         }
         if(ch===2){
          item.sort((a, b) => (a.id > b.id) ? 1 : -1)
         }
          var result=null;
          if(currentPage===1){
            result=index*currentPage;
          }
          else{
              result=index+1+(currentPage-1)*10;
          }
          var rss=result;
          var a="answer"+result;
          var id_qs=id_quesstion;
          
          let a1=<label> <input class="answer" type="radio" name={item2} value={item[0].id} id={item[0].id} /> A. {item[0].Content}</label>;
          let b1=<label><input class="answer" type="radio" name={item2}  value={item[1].id} id={item[1].id}     /> B. {item[1].Content}</label>;
          let c1=<label><input class="answer" type="radio"name={item2}  value={item[2].id} id={item[2].id}  /> C. {item[2].Content}</label>;
          let d1=<label><input class="answer" type="radio"  name={item2}  value={item[3].id}  id={item[3].id} />D. {item[3].Content}</label>;
          if(Id_answer.length>0){
                        Id_answer.map(id=>{
              if(Number(id)===Number(item[0].id)){
                a1=<label> <input class="answer" type="radio" name={item2} value={item[0].id} id={item[0].id} checked /> A. {item[0].Content}</label>;
              
              }
              if(Number(id)===Number(item[1].id)){
                 b1=<label><input class="answer" type="radio" name={item2}  value={item[1].id} id={item[1].id}  checked /> B. {item[1].Content}</label>;
              }
              if(Number(id)===Number(item[2].id)){
                c1=<label><input class="answer" type="radio"name={item2}  value={item[2].id} id={item[2].id} checked /> C. {item[2].Content}</label>;
              }
              if(Number(id)===Number(item[3].id)){
                 d1=<label><input class="answer" type="radio"  name={item2}  value={item[3].id}  id={item[3].id} checked />D. {item[3].Content}</label>;
              }
            })
          }
          else{
           a1=<label> <input class="answer" type="radio" name={item2} value={item[0].id} id={item[0].id} /> A. {item[0].Content}</label>;
           b1=<label><input class="answer" type="radio" name={item2}  value={item[1].id} id={item[1].id}     /> B. {item[1].Content}</label>;
           c1=<label><input class="answer" type="radio"name={item2}  value={item[2].id} id={item[2].id}  /> C. {item[2].Content}</label>;
           d1=<label><input class="answer" type="radio"  name={item2}  value={item[3].id}  id={item[3].id} />D. {item[3].Content}</label>;
          }
          return(
                <div className="answer" id={id_qs} >
                  {a1}{b1}{c1}{d1}
                </div>
        )
        }
}