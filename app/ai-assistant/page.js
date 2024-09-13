// app/ai-assistant/page.js
'use client'; // Ensure it runs on the client side

import React, { useState, useEffect } from 'react';
import styles from '../../styles/ai-assistant.module.css';

const AIAssistant = ({ courses = [], assignments = [] }) => { // Ensure default value for courses and assignments
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Load existing chat from localStorage if any
  useEffect(() => {
    const savedMessages = localStorage.getItem('aiChatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save chat to localStorage
  useEffect(() => {
    localStorage.setItem('aiChatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setMessages([...messages, { role: 'user', text: input }]);
      setInput('');

      // Call AI service for response (using Amazon Comprehend / NLTK in production)
      const aiResponse = "AI-generated response (using Amazon Comprehend)";
      setMessages((prev) => [...prev, { role: 'ai', text: aiResponse }]);
    }
  };

  return (
    <div className={styles.aiAssistantContainer}>
      <h1>AI Study Assistant</h1>

      <div className={styles.chatSection}>
        <div className={styles.chatMessages}>
          {messages.map((msg, index) => (
            <div key={index} className={msg.role === 'user' ? styles.userMessage : styles.aiResponse}>
              {msg.text}
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className={styles.chatInputForm}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.chatInput}
            placeholder="Ask your assistant..."
          />
          <button type="submit" className={styles.chatSubmitButton}>Send</button>
        </form>
      </div>

      <div className={styles.studyPlanner}>
        <h2>Study Planner</h2>
        <ul>
          {courses.length > 0 ? (
            courses.map((course) => (
              <li key={course.id}>
                {course.name} - Next Assignment Due: {course.assignment}
              </li>
            ))
          ) : (
            <li>No courses available</li> // Provide fallback message if no courses are available
          )}
        </ul>
      </div>
    </div>
  );
};

export default AIAssistant;
