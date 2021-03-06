import React from 'react';
import {Link,withRouter} from 'react-router-dom';

class Header extends React.Component{

    render(){
            if(this.props.location.pathname==='/login' || this.props.location.pathname==='/'){
                return null;
            }else{
                return(
                    <header className="header">   
                            <nav className="navbar navbar-expand-lg">
                                
                                <div className="container-fluid d-flex align-items-center justify-content-between">
                                <div className="navbar-header">
                                    <a href="index.html" className="navbar-brand">
                                    <div className="brand-text brand-big visible text-uppercase"><strong className="text-primary">Dark</strong><strong>Admin</strong></div>
                                    <div className="brand-text brand-sm"><strong className="text-primary">D</strong><strong>A</strong></div>
                                    </a>
                                    <button className="sidebar-toggle"><i className="fa fa-long-arrow-left"></i></button>
                                </div>
                                <div className="right-menu list-inline no-margin-bottom">    
                                    <div className="list-inline-item"><a href="#" className="search-open nav-link"><i className="icon-magnifying-glass-browser"></i></a></div>
                                    <div className="list-inline-item dropdown"><a id="navbarDropdownMenuLink1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link messages-toggle"><i className="icon-email"></i><span className="badge dashbg-1">5</span></a>
                                    
                                    
                                    </div>
                                    <div className="list-inline-item logout">
                                        <a id="logout" href="login.html" className="nav-link"> <span className="d-none d-sm-inline">Logout </span><i className="icon-logout"></i></a>
                                    </div>
                                </div>
                                </div>
                            </nav>
                            </header>
                );
            }
    }
}

export default withRouter(Header);