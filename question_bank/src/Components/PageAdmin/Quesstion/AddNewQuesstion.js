import React,{Component} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@blowstack/ckeditor5-full-free-build';
import { Redirect, useLocation } from 'react-router-dom';
import Parser from 'react-html-parser';
import MathJax from 'react-mathjax-preview';
import CallApi from '../../../utils/apiCaller';
export default class AddNewQuesstion extends Component{
    constructor(props){
        super(props);
        this.state={
            Id_grade:this.props.location.state.id,
            Id_teacher: localStorage.getItem("admin"),
            topics: [],
            levels: [],
            answer: 'op1',
            dt1: "",
            dt2: "",
            dt3: "",
            Name_quesstion:"",
            Id_es: "",
            Id_topic:0,
            Id_level: 0,
            massage: "",
            redirect:false
        }
    }
    handleCkeditorName=(e,editor)=>{
        const data=editor.getData();
        this.setState({
            Name_quesstion: data
        })
    }
    handleCkeditor=(e,editor)=>{
        const data=editor.getData();
        this.setState({
            dt: data
        })
    }
    handleCkeditor1=(e,editor)=>{
        const data=editor.getData();
        this.setState({
            dt1: data
        })
    }
    handleCkeditor2=(e,editor)=>{
        const data=editor.getData();
        this.setState({
            dt2: data
        })
    }
    handleCkeditor3=(e,editor)=>{
        const data=editor.getData();
        this.setState({
            dt3: data
        })
    }
    handleOnchange=(e)=>{
        this.setState({ [e.target.name]: e.target.value })
    }
    componentDidMount(){
        let obj1={
            id: localStorage.getItem("admin")
        }
        CallApi("v1/teacher/1","POST",obj1).then(res=>{
            if(res!==undefined){
                let  obj={
                    Id_grade: this.props.location.state.id,
                    Id_es: res.data.details.id
                }
                this.setState({
                    Id_es: res.data.details.id
                })
                CallApi("v1/topic/1","POST",obj).then(res=>{
                   
                    this.setState({
                            topics: res.data.details,
                            
                    })
                })
            }
        })
       
        CallApi("v1/level","GET",null).then(res=>{
            this.setState({
                    levels: res.data.details
            })
        })
    }
    handleSubmit=(e)=>{
        console.log(this.state);
        e.preventDefault();
        if(this.Id_level==="" || this.state.answer ==="" || this.state.dt1==="" ||  this.state.dt2==="" ||  this.state.dt3==="" ||  this.state.Name_quesstion==="" ||  this.state.Id_es==="" || this.state.Id_topic===""   ){
            this.setState({
                massage: "Kh??ng ???????c ????? tr???ng",
               
            })
            alert("kh??ng ???????c ????? tr???ng")
        }
        else{
            CallApi("v1/quesstion/question_answer","POST",this.state).then(res=>{
                if(res!==undefined){
                    this.setState({
                        massage: res.data.massega,
                        redirect: true
                    })
                    alert("Th??m th??nh c??ng!");
                }
            })
        }
    }
    render(){
        let obj=this.props.location.state.id;
        let {topics,levels}=this.state;
       if(this.state.redirect){
        return <Redirect to="/admin/add-question" />
       }
        return(
         
            <div className="col-md-19 menu-right col-sm-9">
                <form onSubmit={this.handleSubmit} onChange={this.handleOnchange}>
                <div className="form-quesstion">
                    <div className="title-quesstion">
                    <div className="form-group title-qs">Th??m C??u H???i M???i
                    </div>
                    <div className="space">
                    </div>
                    <div className="form-group">
                       {/* <div>{ <MathJax math={this.state.dt} />}</div> */}
                        <label >T??n C??u H???i </label> 
                        <CKEditor
                        editor={ClassicEditor}
                        onInit={editor => {
                            
                        }}
                        onChange={this.handleCkeditorName}
                        />
                    </div>
                    <div className="form-group">
                        C???p ?????
                        <select  name="Id_level"  value={this.state.Id_level} className="form-control" onChange={this.handleOnchange} >
                        <option value={0}></option>
                        {levels.map(level=>(
                             <option value={level.Id}>{level.content}</option>
                           ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label >Ch???n Ch????ng</label>
                       
                        <select className="form-control" name="Id_topic" value={this.state.Id_topic}>
                        <option value={0}></option>
                           {topics.map(topic=>(
                             <option value={topic.Id}>{topic.Name_topic}: {topic.Content_topic}</option>
                           ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label >????p ??n A</label>
                        <input type="radio" value="op1"  name="answer" checked={this.state.answer === 'op1'} />
                        <CKEditor
                        editor={ClassicEditor}
                        onInit={editor => {
                            
                        }}
                        onChange={this.handleCkeditor}
                        />
                    </div>
                    <div className="form-group">
                        <label >????p ??n B</label>
                        <input type="radio"  name="answer" value="op2" checked={this.state.answer === 'op2'} />
                        <CKEditor
                    editor={ClassicEditor}
                    onInit={editor => {
                       
                    }}
                    onChange={this.handleCkeditor1}
                />
                    </div>
                    <div className="form-group">
                   
                        <label >????p ??n C</label>
                        <input type="radio"  name="answer" value="op3" checked={this.state.answer === 'op3'} />
                        <CKEditor
                        editor={ClassicEditor}
                        onInit={editor => {
                           
                        }}
                        onChange={this.handleCkeditor2}
                        />
                    </div>
                    <div className="form-group">
                        <label >????p ??n D</label>
                        <input type="radio"  name="answer" value="op4" checked={this.state.answer === 'op4'}/>
                        <CKEditor
                        readOnly = {true}
                        editor={ClassicEditor}
                        onInit={editor => {
                            
                        }}
                        onChange={this.handleCkeditor3}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
                           Th??m M???i
                        </button>
                    </div>
                    </div>
                </div>
               
                </form>
            </div>
        )
    };
}