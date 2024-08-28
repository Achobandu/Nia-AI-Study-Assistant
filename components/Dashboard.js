// components/Dashboard.js

import React from 'react';
import styles from '../styles/Dashboard.module.css'; // Import the CSS module
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.welcomeMessage}>
        <h2>Welcome back, Alex!</h2>
      </div>
      <div className={styles.quickStats}>
        <div className={styles.statCard}>
          <Link href="/courses" passHref>
            <h3>Courses Enrolled</h3>
            <p>5</p>
          </Link>
        </div>
        <div className={styles.statCard}>
          <Link href="/assignments" passHref>
            <h3>Upcoming Assignments</h3>
            <p>3</p>
          </Link>
        </div>
        <div className={styles.statCard}>
          <h3>Study Streak</h3>
          <p>7 days</p>
        </div>
      </div>
      <div className={styles.todaySchedule}>
        <h3>Today's Schedule</h3>
        <ul className={styles.scheduleList}>
          <li>9:00 AM - Math: Calculus</li>
          <li>11:00 AM - History: World War II</li>
          <li>2:00 PM - Biology: Photosynthesis</li>
        </ul>
      </div>
      <button className={styles.startStudyingBtn}>
        <Link href="/courses" passHref>
          Start Studying
        </Link>
      </button>
    </div>
  );
};

export default Dashboard;
