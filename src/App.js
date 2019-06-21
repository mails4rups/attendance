import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import  './assets/vendor/bootstrap/css/bootstrap.min.css';
import  './assets/vendor/font-awesome/css/font-awesome.min.css';
import  './assets/css/font.css';
import  './assets/css/style.default.css';
import  './assets/css/custom.css';


//import './assets/vendor/jquery/jquery.min.js';
//import './assets/vendor/popper.js/umd/popper.min.js';
//import './assets/vendor/bootstrap/js/bootstrap.min.js';
// import './assets/vendor/jquery.cookie/jquery.cookie.js';
// import './assets/vendor/chart.js/Chart.min.js';
// import './assets/vendor/jquery-validation/jquery.validate.min.js';
// import './assets/js/charts-home.js';
//import './assets/js/front.js';

import Header from  './component/header';
import Sidebar from './component/sidebar';
import Footer from './component/footer';

import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Notfound from './pages/notfound';
import Employeelist from './pages/employee-list';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      sideBarShrink:false,
    }

    this.handleChangeForSidebar=this.handleChangeForSidebar.bind(this);
  }

  /*******function defination for sidebar type*****/
  handleChangeForSidebar=(param)=>{
    this.setState({sideBarShrink:param});

  }
  render(){
    console.log(this.state.sideBarShrink);
    return (
      
      <Router>
        
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} exact/>
   
        <Header sidebarType={this.handleChangeForSidebar}/>
           <div className="d-flex align-items-stretch">
           <Sidebar sidebarType={this.state.sideBarShrink}/>
           <Switch>
               <Route path="/dashboard" component={Dashboard} />
               <Route path="/employee" component={Employeelist} />
               {/* <Route component={Notfound}/> */}
             </Switch>
           </div>
         <Footer/>
   
      </Router>
      
     );
  }
  
}

export default App;
