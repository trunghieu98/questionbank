import React,{Component} from 'react';
class Grade_Edit extends Component{
  constructor(props){
    super(props);
    this.state={
      name:""
    }
  }
 
  handleSubmit=(e)=>{
    e.preventDefault();
    if(this.state.name===""){
      alert("không được để trống");
    }
    else{
      console.log("olk");
    }
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:[e.target.value]
    })
  }
 
    render(){
      let {item}=this.props;
      console.log(item)
        return(
            <div className="col-md-6">
              <form onSubmit={this.handleSubmit}>
                 
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
                          <input type="name" id="defaultForm-grade" name="name" className="form-control validate" value={item.name}  onchange={this.handleChange}/>
                        </div>
                      </div>
                      <div className="modal-footer d-flex justify-content-center">
                        <button className="btn btn-danger" onClick={this.handleSubmit}>Sửa</button>
                        <button className="btn btn-warning" data-dismiss="modal" aria-hidden="true">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
          </div>
        )
    };  
}
export default Grade_Edit;