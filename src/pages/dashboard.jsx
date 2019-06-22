import React from 'react';
import Card from '../utils/card';
import {Pie} from 'react-chartjs-2'

class Dashboard extends React.Component{

    render(){
        return(
            <div className="page-content">
                <div className="page-header">
                    <div className="container-fluid">
                        <h2 className="h5 no-margin-bottom">Dashboard</h2>
                    </div>
                </div>
                <section className="no-padding-top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <Card title={'Hello World'}/>
                            </div>
                        </div>
                    </div>
                </section>    

            </div>    

        );
    }
}

export default Dashboard;