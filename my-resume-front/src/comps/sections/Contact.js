
import SendMessage from "./SendMessage"
import '../../style/SectionContent.css'
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

const Contact = () => {

    return (
        <div className="contact">
            <div className="contact-info">
                <div className="row">
                    <MdEmail className='contact-icon' />
                    <p>miriamsh888@gmail.com </p>
                </div>
                <div className="row">
                    <MdLocalPhone className='contact-icon' />
                    <p>+972-54-256-53-62 </p>
                </div>
                <div className="row" id='seperator'>
                    <div className="line"></div>
                    <div id='or'>OR</div>
                    <div className="line"></div>
                </div>
            </div>
            <SendMessage />
        </div>
    )
}

export default Contact