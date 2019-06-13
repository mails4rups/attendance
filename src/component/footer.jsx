import React from 'react';
import {withRouter} from 'react-router-dom';

class Footer extends React.Component{

    render(){
        if(this.props.location.pathname==='/login' || this.props.location.pathname==='/'){
            return null;
        }else{
            return(
                <footer className="footer">
                    <div className="footer__block block no-margin-bottom">
                        <div className="container-fluid text-center">
                            <p className="no-margin-bottom">2019 &copy; Attendance. </p>
                        </div>
                    </div>
                </footer>
            );
        }
    }
            
    
}

export default withRouter(Footer);
