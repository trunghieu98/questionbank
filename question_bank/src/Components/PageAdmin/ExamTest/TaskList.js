import React,{useState,useEffect} from 'react'
const TaskList = (props) =>{
   const [de,Setde]=useState("");
   const [tb,Settb]=useState("");
   const [kho,Setkho]=useState("");
    return(
        
        props.Id_exam.map((val,idx)=>{
            let de = `de-${idx}`, tb= `tb-${idx}`, kho = `kho-${idx}`, Id_topic = `Id_topic-${idx}`
            return (
                <tr key={val.index}>
                     <td>
                        <select name="Id_topic" id={Id_topic} data-id={idx} className="form-control" >
                            <option value={0}></option>
                            {props.topic.map((tp,index1)=>(
                                <option key={index1} value={tp.Id}>{tp.Name_topic}: {tp.Content_topic}</option>
                            ))}
                        </select>
                    </td>
                    <td>
                        <input type="number" name="de" data-id={idx} id={de} min="1" max="40" className="form-control " />
                    </td>
                    <td>
                        <input type="number" name="tb" id={tb} data-id={idx} min="1" max="40" className="form-control " />
                    </td>
                    <td>
                        <input type="number" name="kho" id={kho} data-id={idx} min="1" max="40" className="form-control" />
                    </td>
                   
                    <td>
                       <button onClick={()=>props.add()} type="button" max="40" min="1" className="btn btn-primary text-center">+</button>
                    </td>
                    </tr >
                )
            })
        )
 	}
 	export default TaskList