
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//to make notifactio to any componentet
const notify = (msg, type ,toastOptions) => {
    // const toastOptions = {
  //   position: "bottom-right",
  //   autoClose: 8000,
  //   pauseOnHover: true,
  //   draggable: true,
  //   theme: "dark",
  // };
    if (type === "warn")
        toast.warn(msg)
    else if (type ==="success")
        toast.success(msg)
    else if (type ==="error")
        toast.error(msg)


};

export default notify;