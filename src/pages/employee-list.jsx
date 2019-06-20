import React from 'react';
import Modal from 'react-bootstrap/Modal';

class Employeelist extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
          showAddEmployeeModal: false,
        };

        this.openAddEmployeeModal=this.openAddEmployeeModal.bind(this);
        this.closeAddEmployeeModal=this.closeAddEmployeeModal.bind(this);
        
    }
    
    /******function defination for showing Employee modal****/
    openAddEmployeeModal=()=>{
      this.setState({showAddEmployeeModal:true});
    }

    /******function defination for closing Employee modal****/
    closeAddEmployeeModal=()=>{
      this.setState({showAddEmployeeModal:false});
    }

    render(){
        return(
            <div className="page-content">
                <div className="page-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                            <h2 className="h5 no-margin-bottom">Employee-List</h2>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <button className="btn btn-primary pull-right" onClick={this.openAddEmployeeModal}>Add</button>
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
                                    <th className="text-center">Designation</th>
                                    <th className="text-center">Total Attendance</th>
                                    <th className="text-center">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="text-center">334</th>
                                        <td className="text-center">Mark George</td>
                                        <td className="text-center">Front-End</td>
                                        <td className="text-center">45</td>
                                        <td className="text-center text-green">Eligible</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-center">335</th>
                                        <td className="text-center">Karl Figure</td>
                                        <td className="text-center">Back-End</td>
                                        <td className="text-center">49</td>
                                        <td className="text-center text-green">Eligible</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-center">336</th>
                                        <td className="text-center">Diana Carl</td>
                                        <td className="text-center">IOS</td>
                                        <td className="text-center">53</td>
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

            <Modal show={this.state.showAddEmployeeModal} onHide={this.closeAddEmployeeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form>
                  <div className="form-group">
                    <input type="text" className="form-control" name="addEmployeeName" placeholder="Add employee name"/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="addEmployeePhone" placeholder="Add phone number" />
                  </div>
                  <div className="form-group">
                      <select name="addEmployeeDesignation" ref="addEmployeeDesignation" className="form-control">
                          <option value="">Select Designation</option>
                          <option value="1">Front-End Developer</option>
                          <option value="2">Java Developer</option>
                          <option value="3">IOS</option>
                      </select>
                  </div>
              </form>
          </Modal.Body>
        </Modal>


            </div>    

        );
    }
}

export default Employeelist;