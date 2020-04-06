import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PopUp = {
  showMessage: (status, message) => {

    toast.configure({
      autoClose: 5000,
      draggable: false,
      //etc you get the idea
    });


    if (status === 'success') {
           
      toast.success(`🗹 ${message}'`, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,       
        });
    }
    if (status === 'error') {
      toast.error(`🗙 ${message}`, {
        position: "top-right",
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true, 
      });
    }
    if (status === 'warning') {
      toast.warn(`⚠ ${message}`, {
        position: "top-right",
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true, 
      });
    }
  }
}

export default PopUp