import React from 'react';

class Login extends React.Component{
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
                                <form method="get" className="form-validate mb-4">
                                    <div className="form-group">
                                        <input id="login-username" type="text" name="loginUsername" required data-msg="Please enter your username" className="input-material"/>
                                        <label  className="label-material">User Name</label>
                                    </div>
                                    <div className="form-group">
                                        <input id="login-password" type="password" name="loginPassword" required data-msg="Please enter your password" className="input-material" />
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