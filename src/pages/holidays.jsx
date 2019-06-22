import React from 'react';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";

class Holidays extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
          showAddHolidayModal: false,
          startDate: new Date(),
        };

        this.openAddHolidayModal=this.openAddHolidayModal.bind(this);
        this.closeAddHolidayModal=this.closeAddHolidayModal.bind(this);
        this.handleSelectedDate=this.handleSelectedDate.bind(this);
        
    }
    
    /******function defination for showing Holiday modal****/
    openAddHolidayModal=()=>{
      this.setState({showAddHolidayModal:true});
    }

    /******function defination for closing Holiday modal****/
    closeAddHolidayModal=()=>{
      this.setState({showAddHolidayModal:false});
    }

    /*********function defination for handling selected date******/
    handleSelectedDate=(date)=>{
        this.setState({
            startDate: date
          });
      
    }

    render(){
        return(
            <div className="page-content">
                <div className="page-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                            <h2 className="h5 no-margin-bottom">Holidays Lists</h2>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <button className="btn btn-primary pull-right" onClick={this.openAddHolidayModal}>Add</button>
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
                                    <th className="text-center">Date</th>
                                    <th className="text-center">Holidays</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="text-center">3/02/2019</th>
                                        <td className="text-center">Easter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-center">17/03/2019</th>
                                        <td className="text-center">Holi</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-center">4/05/2019</th>
                                        <td className="text-center">Something</td>
                                    </tr>
                                    
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal show={this.state.showAddHolidayModal} onHide={this.closeAddHolidayModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Holiday</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form>
                  <div className="form-group">
                    <input type="text" className="form-control" name="addHolidayName" placeholder="Add Holiday name"/>
                  </div>
                  <div className="form-group">
                  <DatePicker className="form-control"
                        selected={this.state.startDate}
                        onChange={this.handleSelectedDate}
                        dateFormat='dd/MM/yyyy'
                    />
                  </div>
                  <button className="btn btn-primary">Add</button>
                  
              </form>
          </Modal.Body>
        </Modal>


            </div>    

        );
    }
}

export default Holidays;