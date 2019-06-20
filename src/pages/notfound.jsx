import React from 'react';
import Settings from '../utils/settings';

class Notfound extends React.Component{
    constructor(props){
        super(props);

      
    }

    
    render(){
        return(
            <div className="login-page">
                <div className="container d-flex align-items-center">
                    <div className="form-holder has-shadow">
                    <div className="row">
                        <div className="col-lg-12">
                            <img src={require('../assets/img/404.png')}/>
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

export default Notfound;