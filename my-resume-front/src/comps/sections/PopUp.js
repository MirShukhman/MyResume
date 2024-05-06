import { IoMdCloseCircle } from "react-icons/io";
import '../../style/PopUp.css'

const PopUp = (props) => {

    return (
        <div className="popup">
            <div className="popup-inner">
                <div id="close-popup" onClick={props.onClose}><IoMdCloseCircle id='close-popup-icon' /></div>
                <p>Your message has been sent</p>
                <p>Thank you for reaching out!</p>
            </div>
        </div>
    )
}

export default PopUp