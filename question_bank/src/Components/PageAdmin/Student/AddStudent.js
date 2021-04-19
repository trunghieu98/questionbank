import React,{Component} from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';
    // import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import ClassicEditor from '@blowstack/ckeditor5-full-free-build';
export default class AddStudent extends Component{
    render(){
        return(
            <div className="col-md-10 menu-right col-sm-12">
                <div className="form-quesstion">
                    <div className="title-quesstion">
                    <div className="form-group title-qs">Thêm Câu Hỏi Mới
                    </div>
                    <div className="space">
                    </div>
                    <div className="form-group">
                        <label >Tên Câu Hỏi</label>
                        <input type="text" className="form-control" name="namequesstion" placeholder="Nhập tên câu hỏi..." />
                    </div>
                    <div className="form-group">
                        <label >Chọn Chương</label>
                        <select className="form-control">
                            <option value=""></option>
                            <option>Chương 1</option>
                            <option>Chương 2</option>
                            <option>Chuong 3</option>
                        </select>
                    </div>
                    {/* <div className="form-group">
                        <label >Đáp Án A</label>
                        <CKEditor
                        editor={ClassicEditor}
                        onInit={editor => {
                            // You can store the "editor" and use when it is needed.
                            // console.log( 'Editor is ready to use!', editor );
                        }}
                        />
                    </div>
                    <div className="form-group">
                        <label >Đáp Án B</label>
                        <CKEditor
                        editor={ClassicEditor}
                        onInit={editor => {
                            // You can store the "editor" and use when it is needed.
                            // console.log( 'Editor is ready to use!', editor );
                        }}
                        />
                    </div>
                    <div className="form-group">
                        <label >Đáp Án C</label>
                        <CKEditor
                        editor={ClassicEditor}
                        onInit={editor => {
                            // You can store the "editor" and use when it is needed.
                            // console.log( 'Editor is ready to use!', editor );
                        }}
                        />
                    </div>
                    <div className="form-group">
                        <label >Đáp Án D</label>
                        <CKEditor
                        editor={ClassicEditor}
                        onInit={editor => {
                            // You can store the "editor" and use when it is needed.
                            // console.log( 'Editor is ready to use!', editor );
                        }}
                        />
                    </div> */}
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                           Thêm Mới
                        </button>
                    </div>
                    </div>
                </div>
               
            </div>
        )
    };
}