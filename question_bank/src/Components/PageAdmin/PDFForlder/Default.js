import * as ReactDOM from 'react-dom';
import * as React from 'react';
import CallApi from '../../../utils/apiCaller';
export class Default  extends React.Component {
    downloadTxtFile = () => {
      const element = document.createElement("a");
      var data=document.getElementById('data').value;
      data=data.replaceAll(',','\n');
      const file = new Blob([data],    
                  {type: 'text/plain;charset=utf-8'});
    console.log(file);
      element.href = URL.createObjectURL(file);
      element.download = "myFile.txt";
      document.body.appendChild(element);
      element.click();
    }
    constructor(props){
        super(props);
        this.state={
          datas:[],
        }
      }
        componentDidMount(){
          let obj={
            id: localStorage.getItem("Id_exam_export")
          }
          CallApi("v1/exam/export/pdf","POST",obj).then(res=>{
            
            if(res!==undefined){
                var code=res.data.success;
                var Array=[];
                var answer=[];
                res.data.details.forEach(dt=>{
                    var item=dt.Id_Quesstion;
                    if(code===1){
                        item.sort((a, b) => (a.Content > b.Content) ? 1 : (a.Content === b.Content) ? ((a.id > b.id) ? 1 : -1) : -1 )
                    }
                    if(code===0){
                    item.sort((a, b) => (a.id < b.id) ? 1 : -1)
                    }
                    
                    if(Number(item[0].Diem)===1){
                        answer.push(Number(0))
                    }
                    if(Number(item[1].Diem)===1){
                        answer.push(Number(1))
                    }
                    if(Number(item[2].Diem)===1){
                        answer.push(Number(2))
                    }
                    if(Number(item[3].Diem)===1){
                        answer.push(Number(3))
                    }
                })
                this.setState({
                    datas: answer
                })
            }
          })
        }
    render() {
        let {datas}=this.state;

        console.log(datas);
      return (
       <div>
        <textarea id="data" value={datas}> 
        </textarea>
         <button onClick={this.downloadTxtFile}>Download kết quả</button>  
        </div>
      );
     }
   }