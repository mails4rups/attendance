import React from 'react';

class Studentlist extends React.Component{
    render(){
        return(
            <div className="page-content">
                <div className="page-header">
                    <div className="container-fluid">
                        <h2 className="h5 no-margin-bottom">Student-List</h2>
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

            </div>    

        );
    }
}

export default Studentlist;