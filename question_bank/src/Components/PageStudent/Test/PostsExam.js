import React,{Component,useState,useEffect} from 'react';
import CallApi from '../../../utils/apiCaller';
import AnsewerQuestion from './AnsewerQuestion';
import {Redirect} from 'react-router-dom';
import Countdown from 'react-countdown';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
class PostsExam extends Component{
    constructor(props){
        super(props);
        this.state={
            Id_exam: localStorage.getItem('Id_exam'),
            questions:  [],
            Data: [],
            Id_answer: [],
            grade_exam:[],
            Id_student: localStorage.getItem('user'),
            redirect: 0,
            time: {},
            seconds: localStorage.getItem('time_end'),
            time_pr: localStorage.getItem('time_pr'),
            stt: localStorage.getItem('stt'),
        }
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }
    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
    }
    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }
    countDown() {
        let seconds = this.state.seconds - 1;

        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
        localStorage.setItem("time_end",seconds);
        if (seconds == 0) { 
            clearInterval(this.timer);
            this.setState({ redirect: 1 });
            this.handleSubmit()
            localStorage.removeItem("time_end");
        }
    }
    componentDidMount(){
        if(localStorage.getItem('question')!==null){
            this.setState({
                Id_answer: JSON.parse(localStorage.getItem('question'))
            })
        }
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        this.startTimer()
    }
    handleSubmit=()=>{
        let data=this.handleSave();
        var time_starts=JSON.parse(localStorage.getItem('time_start'));
        let obj={
            len: this.props.len,
            question: data,
            Exam: this.props.exam,
            Id_student: this.state.Id_student,
            Id_exam: this.state.Id_exam,
            time_start: time_starts.time_start,
            time_start1: this.state.time_pr,
            time_end: moment().lang('vi').format('YYYY-MM-DD HH:mm:ss'),
            time_end1:this.state.seconds,
            stt:this.state.stt
        }
        console.log(obj.question.length);
        CallApi("v1/grade_exam","POST",obj).then(res=>{
            if(res!==undefined){
                localStorage.removeItem("question");
                alert("Điểm là:"+res.data.data);
            }
        })
        this.setState({
            redirect:1
        })
        localStorage.removeItem("time_process");
        localStorage.removeItem("time_start");
        
        localStorage.removeItem("Id_exam");

    }
    handleSave=(e)=>{
        // //fillter trung
        function uniqByKeepLast(question, key) {
            return [
                ...new Map(
                    question.map(x => [key(x), x])
                ).values()
            ]
        }
        console.log(this.state.questions.length)
        let data=uniqByKeepLast(this.state.questions, it => it.question);
        let dataN=[];
        data.map(dt=>{
            dataN.push(dt.answer);
        });
        this.setState({
            Id_answer: dataN,
        });
        localStorage.setItem('question', JSON.stringify(dataN));
        return data;
    }
    handleInputChange=(e)=>{
        if(e.target.checked !==undefined){
        this.setState({
            questions: this.state.questions.concat({ question: Number(e.target.name), answer: Number(e.target.value),core: 0 })
        })
    }
     function uniqByKeepLast(question, key) {
            return [
                ...new Map(
                    question.map(x => [key(x), x])
                ).values()
            ]
        }
        let data=uniqByKeepLast(this.state.questions, it => it.question);
        let dataN=[];
        data.map(dt=>{
            dataN.push(dt.answer);
        });
        this.setState({
            Id_answer: dataN,
        });
    }
    
    render(){
        if(this.state.redirect===1){
            return <Redirect to="/student" />;
           }
          
        let {posts,currentPage,index,len,ch}=this.props;
        let {Id_answer}=this.state;
        return (
            <ul className="list-group mb-4">
                <div className="fas fa-clock clock-start">
                    {this.state.time.m}:Phút {this.state.time.s}: Giây
                </div>
                <form onSubmit={this.handleSubmit}  onClick={this.handleInputChange} id="formSubmit"  method="POST">
                   {posts ? posts.map((post,index)=>{
                       var item=post.Id_Quesstion;
                        var item2=post.id;
                       return(
                        <tbody>
                            <div className="question" id=""> Câu {this.showIndex(index,currentPage)}: {post.Name_quesstion}</div>
                            <AnsewerQuestion item2={item2} item={item} key={post.id} index={index} currentPage={currentPage} id_quesstion={post.id} Id_answer={Id_answer} ch={ch}/>
                        </tbody>
                    );
                   }): <h2>Loading.....</h2>}   
                   <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>Nộp Bài</button>
                   <p className="btn btn-primary" onClick={this.handleSave}>Lưu Bài</p>
                   </form>
                </ul>
            );  
        }
    showIndex(index,currentPage){
            var result=null;
            if(currentPage===1){
                result=index+1*currentPage;
            }
            else{
                result=index+1+(currentPage-1)*10;
            }
        return result;
    }
}
  
export default PostsExam;