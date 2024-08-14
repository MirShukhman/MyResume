import axios from 'axios';
import { useState, useRef } from 'react';
import PopUp from './PopUp';
import '../../style/SectionContent.css'
import '../../style/Sections.css'

const SendMessage = () => {
    const message = useRef();
    const name = useRef();
    const email = useRef();
    const [popUp, setPopUp] = useState(false)

    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://edcb-2a06-c701-440a-a400-24d3-1e2-2303-12c3.ngrok-free.app/send_message`, {
                message: message.current.value,
                sender_email: email.current.value,
                sender_name: name.current.value
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = response.data;

            if (response.status !== 201) {
                if (data.err) {
                    console.error('Error from backend:', data.err);
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            } else {
                openPopUp()
                e.target.reset();
            }
        } catch (error) {
            console.error('Error during Axios request:', error);
        }

    };

    function openPopUp() {
        setPopUp(true)
    }

    function closePopUp() {
        setPopUp(false)
    }

    return (
        <div className='message-box'>
            <p>Leave A Message:</p>
            <form id='message-form' onSubmit={handleMessageSubmit}>
                <div className='row'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" ref={name} required />
                </div>
                <div className='row'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="eamil" ref={email} required />
                </div>
                <div className='row'>
                    <textarea
                        ref={message}
                        placeholder="Your Message"
                        rows={8} cols={30} required />
                </div>
                <button type='submit' id='border-button'>Send Message</button>
                <button type='submit' className="button-shadow" id='send-message-button'></button>
            </form>

            {popUp &&
                <div className='sucsess-msg'>
                    <PopUp onClose={closePopUp} />
                </div>}
        </div>
    )
}
export default SendMessage