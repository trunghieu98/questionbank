import React, { Component, useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import CallApi from '../../../utils/apiCaller';
import callAPI from '../../../utils/apiCallerpython';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from 'axios';
const ItemExam = () => {
    const [imgs, setImgs] = useState([]);
    const [answer, setAnswer] = useState("");
    const [imgss, setImgss] = useState([]);
    const [fileError, setFileError] = useState(0);
    const [answerError, setanswerError] = useState(0);

    const [createExam, setcreateExam] = useState(false);
    const handleShowForm = () => setcreateExam(true);
    const [createExams, setcreateExams] = useState(false);
    const handleShowForms = () => setcreateExams(true);
    const handleCancel = () => setcreateExam(false);
    const [selectedImage, setSelectedImage] = useState([]);

    const [made,Setmade]=useState("")
    const [redirect,SetRedirect]=useState(0)
    async function fetchData() {
        try{
            const formData = new FormData();
            const formanswer = new FormData();
            formanswer.append('file',answer[0]);
            for (const i of Object.keys(imgs)) {
                formData.append('files', imgs[i])
            }
            await   CallApi("v1/img/upload/img","POST", formData).then(async(res1)=>{
                await     callAPI("choose-folder-muitiple","POST",res1.data).then(async(res2)=>{
                            console.log(res2);
                            await     CallApi("v1/text/upload","POST",formanswer).then(async(res3)=>{
                                            console.log(res3);
                                await       callAPI("answer","POST",res3.data).then(async(res4)=>{
                                    console.log(res4);
                                    await   callAPI("grade","GET",null).then(res=>{
                                                alert("Chấm điểm thành công");
                                               let obj={
                                                   made:1,
                                                   Id_student: res.data.arr
                                               }
                                               CallApi("v1/grade_exam/hienthi/luu","POST",obj).then(res=>{
                                                    if(res!==undefined){
                                                        SetRedirect(1)
                                                    }
                                                })
                                    })
                                })
                            })
                        })
                    })
                    
        }catch(e){
            console.log(e);
        }
    }
    const answerChange = (e) => {
        setanswerError(0);
        setAnswer(e.target.files);
        if(e.target.files[0].type==='text/plain'){
            setanswerError(2);
            setAnswer(e.target.files);
        }else{
            setanswerError(1);
            setAnswer([]);
        }
    }
    const imgHandleChange = (e) => {
        let data=e.target.files;
        setImgs(data);
        const fileArray = [];
        var imgss = e.target.files;
        setFileError(0);
        for (const i of Object.keys(imgss)) {
            if (imgss[i].type === 'image/jpeg' || imgss[i].type === 'image/png') {
                fileArray.push(URL.createObjectURL(imgss[i]));
                setFileError(2);
            } else {
                setFileError(1);
                continue;
            }
        }
        if (fileArray.length > 0 && fileError!==1) {
            setSelectedImage((prevImages) => prevImages.concat(fileArray));
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file)
            )
        }
        else {
            setSelectedImage([]);
        }
    }
    const renderPhotos = (source) => {
        if (source.length > 0) {
            return source.map((photo, index) => {
                return (
                    <div className="each-fade">
                        <img src={photo} key={index} className="size-img" />
                    </div>
                )
            })
        }
    }
    const handleSubmit =async (e) => {
        e.preventDefault();
        console.log(answer.length);
        console.log(imgs.length);
        if(imgs.length >0 && answer.length>0 && made!==""){
          await  fetchData();
        }else{
            alert("lỗi");
        }
         
    }
    if(redirect===1){
        return <Redirect
        to={{
          pathname: "/admin/show-view",
        }}
       />;
    }
    return (
        <div className="col-md-19 menu-right col-sm-9">
            <div className="main-contents">
                <div className="title-subjects">
                    <div className="title-class">
                        <div className="title-content">
                            Chấm
                                   <div className="icon" />
                        </div>
                        <button className="btn btn-primary" onClick={handleShowForm}>Chọn file chấm bài</button>
                        <div >
                            {createExam ?
                                <div className="form-ai">
                                    <form enctype="multipart/form-data" className="form-controll">
                                    <input type="text" name="made" onChange={e => Setmade(e.target.value)} />
                                        <p>Chọn File</p>
                                        <input type="file" id="file" multiple name="files" onChange={imgHandleChange} />
                                        {fileError===1? <small className="text-danger">Lỗi định dạng file chỉ hỗ trọ (jpg,png)</small>: fileError===2? <small className="text-success">Chọn file thành công</small>:null
                                        }
                                        <br />
                                        <p className="form-group">Nhập đáp án</p>
                                        <input type="file" id="file"  name="file_answer" onChange={answerChange} />
                                        {answerError===1? <small className="text-danger">Lỗi định dạng file chỉ hỗ trợ file dang txt</small>: answerError===2? <small className="text-success">Chọn file thành công</small>:null
                                        }<br />
                                        <div className="btn btn-danger" onClick={handleSubmit}>Tạo</div>
                                        <div className="btn btn-warning" onClick={handleCancel}>Hủy</div>
                                    </form>
                                </div> : null}
                        </div>
                    </div>
                    <div className="">  
                        <div className="slide-container">

                        </div>
                        <div className="row">
                            <div className="img-size">
                                {(selectedImage.length > 0 && fileError!==1) ?
                                    <Fade>
                                        {renderPhotos(selectedImage)}
                                    </Fade> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemExam;

