'use client'; // Ensures this runs on the client-side

import React, { useState } from 'react';
import styles from '../styles/Chatbox.module.css';

const Chatbox = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const[message, setMessage] = useState('');
  const[messages, setMessages]= useState([]);

  const toggleChatbox = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSentMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setMessage('');
    }
  };


  return (
    <div className={`${styles.chatbox} ${isExpanded ? styles.expanded : ''}`}>
      {!isExpanded ? (
        <button onClick={toggleChatbox} className={styles.chatboxToggle}>
          AI
        </button>
      ) : (
        <>
          <button onClick={toggleChatbox} className={styles.chatboxToggle}>
            ✕
          </button>
          <div className={styles.chatboxContent}>
            <div className={styles.chatMessages}>
              {messages.map((message, index) => (
                <div key={index} className={styles.chatMessages}>
                  {message}
                </div>)
              )}
            </div>
            <form onSubmit={handleSentMessage} className={styles.chatInput}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Chatbox;
