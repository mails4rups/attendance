import React from 'react';
import Settings from '../utils/settings';

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state={
            username: '',
            password: ''
        }
        
        this.login=this.login.bind(this);

       
    }

     /*******defination for login function ****/
     login=(e)=>{
        e.preventDefault();
        let username=e.target.loginUsername.value;
        let password=e.target.loginPassword.value;
        console.log(username,password);
        if(username!=='' && password!==''){
            Settings.uiToast('success','Please Provide username and password');
        }else{
            Settings.uiToast('error','Please Provide username and password');
        }
    }

    render(){
        return(
            <div className="login-page">
                <div className="container d-flex align-items-center">
                    <div className="form-holder has-shadow">
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="info d-flex align-items-center">
                            <div className="content">
                            <div className="logo">
                                <h1>Dashboard</h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form d-flex align-items-center">
                            <div className="content">
                                <form className=" mb-4" onSubmit={this.login}>
                                    <div className="form-group">
                                        <input id="login-username" type="text" name="loginUsername"  data-msg="Please enter your username" className="input-material"/>
                                        <label  className="label-material">User Name</label>
                                    </div>
                                    <div className="form-group">
                                        <input id="login-password" type="password" name="loginPassword"  data-msg="Please enter your password" className="input-material" />
                                        <label  className="label-material">Password</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="copyrights text-center">
                
                </div>
                </div>
        );
    }

}

export default Login;