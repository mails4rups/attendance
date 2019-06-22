import React from 'react';
import {Link,withRouter} from 'react-router-dom';


class Sidebar extends  React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        console.log(this.props.sidebarType.presentState)

        let currentRoute=this.props.location.pathname;

        if(
            this.props.location.pathname==='/login' || this.props.location.pathname==='/'
        ){
            return null
        }else{
            return(
                <nav id="sidebar" className={this.props.sidebarType.presentState === true ?'shrinked':null}>
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
                            <li className={currentRoute==='/holidays' ? "active" : ''}>
                                <Link  to="/holidays"> <i className="icon-grid"></i>Holidays </Link>
                            </li>
                            <li className={currentRoute==='/protocols' ? "active" : ''}>
                                <Link  to="/protocols"> <i className="icon-grid"></i>Protocols </Link>
                            </li>
                        
                        </ul>
                </nav>
            );
        }
        
    }
}

export default withRouter(Sidebar);