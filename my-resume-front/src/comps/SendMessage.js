import axios from 'axios';
import { useState, useRef } from 'react';

const SendMessage = () => {
    const message = useRef();
    const name = useRef();
    const email = useRef();
    const [sucsess, setSucsess] = useState(false)

    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://127.0.0.1:5000/send_message`, {
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
                setSucsess(true)
                e.target.reset();
            }
        } catch (error) {
            console.error('Error during Axios request:', error);
        }

    };

    return (
        <div className='message-box'>
            <form onSubmit={handleMessageSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" ref={name} required />< br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="eamil" ref={email} required />< br />

                <textarea
                    ref={message}
                    placeholder="Your Message"
                    rows={4} cols={50} required />< br />
                <button type='submit'> Send Message </button>
            </form>

            {sucsess &&
                <div className='sucsess-msg'>
                    <p>Your message has been sent</p>
                    <p>Thank you for reaching out!</p>
                </div>}
        </div>
    )
}
export default SendMessage