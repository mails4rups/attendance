import React from 'react';
import {Link,withRouter} from 'react-router-dom';


class Sidebar extends  React.Component{
    render(){
        let currentRoute=this.props.location.pathname;

        if(
            this.props.location.pathname==='/login' || this.props.location.pathname==='/'
        ){
            return null
        }else{
            return(
                <nav id="sidebar">
                        <div className="sidebar-header d-flex align-items-center">
                            <div className="avatar">
                                <img src={require('../assets/img/avatar-6.jpg')} alt="..." className="img-fluid rounded-circle"/>
                            </div>
                            <div className="title">
                                <h1 className="h5">Mark Stephen</h1>
                                <p>Web Designer</p>
                            </div>
                        </div>
                        <span className="heading">Main</span>
                        <ul className="list-unstyled">

                            <li className={currentRoute==='/dashboard' ? "active" : ''}>
                                <Link  to="/dashboard"> <i className="icon-home"></i>Dashboard </Link>
                            </li>
                            <li className={currentRoute==='/employee' ? "active" : ''}>
                                <Link  to="/employee"> <i className="icon-grid"></i>Employees </Link>
                            </li>
                        
                        </ul>
                </nav>
            );
        }
        
    }
}

export default withRouter(Sidebar);