import React from 'react';
import {Link,withRouter} from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            shrinkSidebar:false,
        }

    }

    

    render(){ 
        console.log(this.props);
        return(
            <div className="statistic-block block">
                  <div className="progress-details d-flex align-items-end justify-content-between">
                    <div className="title">
                      <div className="icon"><i className="icon-contract"></i></div><strong>{this.props.title}</strong>
                    </div>
                    <div className="number dashtext-2">375</div>
                  </div>
                  <div className="progress progress-template">
                    <div role="progressbar" style={{width : '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-template dashbg-2"></div>
                  </div>
                </div>
        );
            }
    }

export default withRouter(Header);