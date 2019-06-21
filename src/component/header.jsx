import React from 'react';
import Sidebar from './sidebar';
import {Link,withRouter} from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            shrinkSidebar:false,
        }

        this.toggleSideBar=this.toggleSideBar.bind(this);
    }

    /*******function defination for toggle sidebar*****/
    toggleSideBar=()=>{
        if(this.state.shrinkSidebar===false){
            var presentState=true;
        }else{
            var presentState=false;
        }

        this.setState({shrinkSidebar:presentState});
        this.props.sidebarType({presentState});
    }


    render(){
            if(
                this.props.location.pathname==='/login' || this.props.location.pathname==='/'
            ){
                return null;
            }else{
                if(this.state.shrinkSidebar){
                    var arrowIcon="fa fa-long-arrow-right";
                }else{
                    var arrowIcon="fa fa-long-arrow-left";
                }
                return(
                    <header className="header">   
                            <nav className="navbar navbar-expand-lg">
                                
                                <div className="container-fluid d-flex align-items-center justify-content-between">
                                <div className="navbar-header">
                                    <Link to="/dashboard" href="index.html" className="navbar-brand">
                                    {
                                        this.state.shrinkSidebar===false ?  
                                        <div className="brand-text brand-big visible text-uppercase"><strong className="text-primary">Dark</strong><strong>Admin</strong></div>
                                        :
                                        <div  className="brand-text brand-sm visible"><strong className="text-primary">D</strong><strong>A</strong></div>
                                        }
                                    
                                    </Link>
                                    <button onClick={this.toggleSideBar} className={this.state.shrinkSidebar===true?' sidebar-toggle active':'sidebar-toggle'}><i className={arrowIcon}></i></button>
                                </div>
                                <div className="right-menu list-inline no-margin-bottom">    
                                    <div className="list-inline-item"><a href="#" className="search-open nav-link"><i className="icon-magnifying-glass-browser"></i></a></div>
                                    <div className="list-inline-item dropdown"><a id="navbarDropdownMenuLink1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link messages-toggle"><i className="icon-email"></i><span className="badge dashbg-1">5</span></a>
                                    
                                    
                                    </div>
                                    <div className="list-inline-item logout">
                                        <Link to="/login" id="logout" className="nav-link"> <span className="d-none d-sm-inline">Logout </span><i className="icon-logout"></i></Link>
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