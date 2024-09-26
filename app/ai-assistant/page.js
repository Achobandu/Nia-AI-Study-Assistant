// app/ai-assistant/page.js
'use client'; // Ensure it runs on the client side

import React, { useState, useEffect } from 'react';
import styles from '../../styles/ai-assistant.module.css';

const AIAssistant = ({ courses = [], assignments = [] }) => {
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

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      const newMessage = { role: 'user', text: input };
      setMessages([...messages, newMessage]);
      setInput('');

      // Call Next.js API route
      try {
        const response = await fetch('/api/ai-assistant', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: input }),
        });

        const data = await response.json();
        setMessages((prev) => [...prev, { role: 'ai', text: data.aiResponse }]);
      } catch (error) {
        console.error('Error communicating with AI service:', error);
        setMessages((prev) => [...prev, { role: 'ai', text: 'There was an error. Please try again.' }]);
      }
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
            <li>No courses available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AIAssistant;
