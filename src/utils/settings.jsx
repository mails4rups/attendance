import React from 'react';
import Swal from 'sweetalert2'

class Settings extends React.Component{

  static uiToast = (type,message) =>{

    
     const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        background: '#2d3035',
      });
      
       Toast.fire({
        type: type,
        title: message
      })
  }
}

export default Settings;
  