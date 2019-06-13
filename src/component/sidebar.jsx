import React from 'react';
import {Link,withRouter} from 'react-router-dom';


class Sidebar extends  React.Component{
    render(){
        if(this.props.location.pathname==='/login' || this.props.location.pathname==='/'){
            return null
        }else{
            return(
                <nav id="sidebar">
                        <div className="sidebar-header d-flex align-items-center">
                            <div className="avatar">
                                <img src={require('../img/avatar-6.jpg')} alt="..." className="img-fluid rounded-circle"/>
                            </div>
                            <div className="title">
                                <h1 className="h5">Mark Stephen</h1>
                                <p>Web Designer</p>
                            </div>
                        </div>
                        <span className="heading">Main</span>
                        <ul className="list-unstyled">
                            <li className="active"><a href="index.html"> <i className="icon-home"></i>Home </a></li>
                            <li><a href="tables.html"> <i className="icon-grid"></i>Tables </a></li>
                        
                        </ul>
                </nav>
            );
        }
        
    }
}

export default withRouter(Sidebar);