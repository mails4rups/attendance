import React from 'react';
import Modal from 'react-bootstrap/Modal';

class Studentlist extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
          showAddStudentModal: false,
        };

        this.openAddStudentModal=this.openAddStudentModal.bind(this);
        this.closeAddStudentModal=this.closeAddStudentModal.bind(this);
        
    }
    
    /******function defination for showing student modal****/
    openAddStudentModal=()=>{
      this.setState({showAddStudentModal:true});
    }

    /******function defination for closing student modal****/
    closeAddStudentModal=()=>{
      this.setState({showAddStudentModal:false});
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
                                <button className="btn btn-primary pull-right" onClick={this.openAddStudentModal}>Add</button>
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

            <Modal show={this.state.showAddStudentModal} onHide={this.closeAddStudentModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          
        </Modal>


            </div>    

        );
    }
}

export default Studentlist;