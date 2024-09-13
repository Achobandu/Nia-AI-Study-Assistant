//app/layout-client.js
'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header'; // Import Header component
import Sidebar from '../components/Sidebar'; // Import Sidebar component
import Chatbox from '../components/Chatbox';

export default function ClientLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in

  // Simulate checking if the user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        {isLoggedIn && <Sidebar />} {/* Show sidebar only when logged in */}
        <main className="content-area">
          {children} {/* Render page content here */}
          <Chatbox /> {/* Chatbox added globally */}
        </main>
      </div>
    </div>
  );
}
