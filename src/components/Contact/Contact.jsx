import "./Contact.scss";
import { useState, useRef } from "react";


export default function Contact() {

    
    
     const [message, setMessage] = useState(false);
     const handleSubmit = (e) => {
       e.preventDefault();
       setMessage(true);
    };

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/handshake.jpg" alt="" />
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form  onSubmit={handleSubmit}>
                    
                    <input type="text " placeholder="user_name" />
                    
                    <input type="text " placeholder="user_email" />
                    
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">
                        Send
                    </button>
                  {message && <span>Thanks,I'll reply ASAP </span>} 
                </form>
            </div>
        </div>
    )
}
