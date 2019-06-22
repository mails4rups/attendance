import React from 'react';
import Settings from '../utils/settings';

class Protocols extends React.Component{
    constructor(props){
        super(props);

      
    }

    
    render(){
        return(
            <div className="page-content">
                <div className="page-header">
                    <div className="container-fluid">
                        <h2 className="h5 no-margin-bottom">Protocols</h2>
                    </div>
                </div>
                <section className="no-padding-top">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                        <form>
                            <div className="form-group">
                                <label>Medical Leave</label>
                                <input type="number" min="0" className="form-control" name="medicalLeave"/>
                            </div>
                            <div className="form-group">
                                <label>Casual Leave</label>
                                <input type="number" min="0" className="form-control" name="casualLeave"/>
                            </div>
                            <div className="form-group">
                                <label>Payable Leave</label>
                                <input type="number" min="0" className="form-control" name="payableLeave"/>
                            </div>
                            <div className="form-group">
                                <label>Work From Home</label>
                                <input type="number" min="0" className="form-control" name="workFromHome"/>
                            </div>
                            <button class="btn btn-primary text-right">Save</button>
                        </form>
                    </div>
                        <div className="col-md-2"></div>
                </div>

                    </div>
                </section>        
                
            </div>
        );
    }

}

export default Protocols;