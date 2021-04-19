import React,{Component} from 'react';
class QuestionEdit extends Component{
    render(){
        return(
            <div className="col-md-6">
              <div>
                 
                <div className="modal fade" id="modalLoginForm" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold panel-title">Sửa Khối</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body mx-3">
                        <div className="md-form mb-5">
                          <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Tên</label>
                          <input type="email" id="defaultForm-grade" className="form-control validate" />
                        </div>
                      </div>
                      <div className="modal-footer d-flex justify-content-center">
                        <button className="btn btn-danger">Sửa</button>
                        <button className="btn btn-warning">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        )
    };  
}
export default QuestionEdit;