import React from 'react'
//styles'
import '../styles/Messages.css'

//icons
import button from '../images/button.svg';

function Message({title, messageInput, optionalInput}) {
  return (
    <div className="gcet__message marginp">
            <div className="gcet__message-section">
                <h2>{title}</h2>
                <form className='gcet__messageForm'>
                    <div className="input_group">
                    <label>
                        <span>Your Name</span>
                        <input
                        type="text"
                        placeholder='Type Your Name Here'
                        required
                        />
                    </label>
                    <label>
                        <span>Email Address</span>
                        <input
                        type="text"
                        placeholder='Enter a Valid Email Address'
                        required
                        />
                    </label>
                    </div>
                    <div className="input_group">
                    <label>
                        <span>Phone Number</span>
                        <input
                        type="text"
                        placeholder='Phone Number'
                        required
                        />
                    </label>
                    <label>
                        <span>{optionalInput}</span>
                        <input
                        type="text"
                        placeholder='Type Here'
                        required
                        />
                    </label>
                    </div>
                    <label htmlFor="">
                        <span>{messageInput}</span>
                        <textarea placeholder='Type Message Here..'></textarea>
                    </label>
                    <div className="button-img">
                        <img src={button} alt="submit" />
                    </div>
                </form>
            </div>
            <div className="gcet__infor-section">
                <h3>Contact Information</h3>
                <address>5th floor, Mulliner Towers, 39 Alfred Rewane Road, Ikoyi, Lagos.</address>
                <a href="mailto:webmaster@example.com">info@gcetng.com</a>
                <p>+234 1 4623411</p>
            </div>
        </div>
  )
}

export default Message