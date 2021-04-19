import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import CallApi from '../../../utils/apiCaller';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import Details from './Detials';
import ArtCharts from './ArtCharts';
import DetailsResult from './DetailsResult';
import Showstudent from './Showstudent';
class ManageDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            tests: "",
            exams: "",
            reCharts: 1,
            Array_ts:""
        }
    }
    componentDidMount (){
        let obj={
            id: this.props.location.state.id
        }
        CallApi("v1/grade_exam/show","POST",obj).then(res=>{
            // console.log(res.data)
            console.log(res.data)
            if(res!==undefined){
                var Ar=[];
                var arr2=[]
                var arr3=[];
                res.data.data.map(dt=>{
                    dt.test.map(ts=>{
                        Ar.push(ts.Point);
                    })
                    arr2.push(dt.test);
                    arr3.push(dt.exam);
                })
                this.setState({
                    tests: res.data.data[0].test,
                    exams:  arr3,
                    Array_ts: Ar
                 })
            }
        })
    }

    render(){
        let {exams,tests,reCharts,Array_ts}=this.state;
        let artChart=null;
        if(reCharts){
            artChart= <ArtCharts  Array_ts={Array_ts} />
        }
        return(
            <div className="col-md-12 col-sm-12 col-lg-12 crollweb">
                  <div className="link1">
                    <table className="table">
                    <thead>
                        <tr>
                            <th  className="text-center">STT</th>
                            <th  className="text-center">Mã số</th>
                            <th  className="text-center">Thời gian bắt đầu</th>
                            <th  className="text-center">Thời gian hoàn thành</th>
                            <th  className="text-center">Thời gian thực hiện</th>
                            <th className="text-center"> Tổng điểm </th>
                            {this.showQuestionCore(exams)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.showTestExam(tests,exams)}
                        
                    </tbody>
                    <tbody>
                        {this.showTestExam1(tests,exams)}
                    </tbody>
                    </table>
                </div>
                <div>
                   <button className="btn btn-primary"> Biểu đồ điểm</button>
                   {artChart}
                </div>
            </div>
        )
    }
    
    showQuestionCore(exams,core){
        let result=null;
        if(exams.length>0){
            var core=10/exams[0].length;
            result=exams[0].map((ex,index)=>{
                return(
                    <th key={index}> Q.{index+1}<br />/ {core}</th>
                )
            })
        }
        return result;
    }
    showTestExam(tests,exams){
        let result=null;
        if(tests.length>0 && exams.length> 0){
            result=tests.map((test,index)=>{
                let a=JSON.parse(test.Time_end)
                let b=JSON.parse(test.Time_start);
                let time=(Number(b.time)*60-Number(a.time));
                var time_rs=this.secondsToTime(time);
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                       <Showstudent Id_student={test.Id_student} />
                        <td>{b.times}</td>
                        <td>{a.times}</td>
                        <td>{time_rs.m} phút {time_rs.s} giây</td>
                        <td>{test.Point} điểm</td>
                        {this.showQuestion(test.Id_question,exams)}
                    </tr>
                )
            })
        }
        return result;
    }
    showTestExam1(tests,exams){
        console.log(tests)
        var Array=[];
        var Array2=[]
        if(tests.length>0 && exams.length> 0){
            tests.map((test)=>{
                var test1=JSON.parse(test.Id_question);
                test1.map(t=>{
                    Array2.push(t);
                })
                Array.push(test.Id_question)
            })
        }
        console.log(Array2)
        return(
            <tr >
                <td colspan="6" className="text-center">Tổng quan</td>
                <DetailsResult tests={Array2} exams={exams} />
            </tr>
        )
    }
    showQuestion(Id_question,exams){
        var Id_question=JSON.parse(Id_question);
        let result=null;
        if(exams.length>0){
            var core=10/exams.length;
            result=Id_question.map((ex,index)=>{
                var Array1=[];
                return(
                    <Details key={index} tests={ex} exams={exams} />
                )
            })
        }
        return result;
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
}
export default ManageDetails;