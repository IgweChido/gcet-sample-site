import React from 'react'
import '../styles/PageLayout.css';

//components
import Message from './Message';

function PageLayout({text, subtext, title, messageInput, optionalInput}) {
  return (
    <div className='gcet__layout'>
        <div className="gcet__layout-head">
            <div className="gcet__layout-wrap marginp">
            <div className='gcet__layout-banner'>
                <h1>{text}</h1>
                <p>{subtext}</p>
            </div>
            </div>
        </div>
        <Message title={title} messageInput={messageInput} optionalInput={optionalInput} />
    </div>
  )
}

export default PageLayout