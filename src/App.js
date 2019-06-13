import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import Header from  './component/header';
import Sidebar from './component/sidebar';
import Footer from './component/footer';

import Dashboard from './pages/dashboard';
import Login from './pages/login';

function App() {
  return (
   <Router>
     
     <Route path="/login" component={Login} />
     <Route path="/" component={Login} exact/>

     <Header/>
        <div className="d-flex align-items-stretch">
        <Sidebar/>
        <Switch>
            <Route path="/dashboard" component={Dashboard} />
            {/* <Route component={}/> */}
          </Switch>
        </div>
      <Footer/>

   </Router>
   
  );
}

export default App;
