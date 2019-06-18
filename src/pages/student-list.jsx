import React from 'react';
import $ from "jquery";

class Studentlist extends React.Component{
    constructor(props){
        super(props);
        
    }
    /*********show modal function defination ****/
    showModal=(param)=>{
        $('#'+param).modal('show');
    }


    render(){
        return(
            <div className="page-content">
                <div className="page-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                            <h2 className="h5 no-margin-bottom">Student-List</h2>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <button className="btn btn-primary pull-right" onClick={()=>{this.showModal('addStudentModal')}}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="no-padding-top">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="block margin-bottom-sm">
                            <div className="table-responsive"> 
                                <table className="table">
                                <thead>
                                    <tr>
                                    <th className="text-center">Roll No</th>
                                    <th className="text-center">Full Name</th>
                                    <th className="text-center">Department</th>
                                    <th className="text-center">Total Attendance</th>
                                    <th className="text-center">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="text-center">334</th>
                                        <td className="text-center">Mark George</td>
                                        <td className="text-center">Computer Science</td>
                                        <td className="text-center">45</td>
                                        <td className="text-center text-green">Eligible</td>
                                    </tr>
                                    
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="addStudentModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" className="modal fade text-left">
                      <div role="document" className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header"><strong id="exampleModalLabel" className="modal-title">Signin Modal</strong>
                            <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>
                          </div>
                          <div className="modal-body">
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <form>
                              {/* <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Email Address" className="form-control"/>
                              </div>
                              <div className="form-group">       
                                <label>Password</label>
                                <input type="password" placeholder="Password" className="form-control"/>
                              </div> */}
                              <div className="form-group">       
                                <input type="submit" value="Signin" className="btn btn-primary"/>
                              </div>
                            </form>
                          </div>
                          
                        </div>
                      </div>
                    </div>

            </div>    

        );
    }
}

export default Studentlist;