// components/Dashboard.js
'use client';

import React, { useEffect, useState } from 'react';
import styles from '../styles/Dashboard.module.css'; // Import the CSS module
import Link from 'next/link';

const Dashboard = () => {
  const [courses, setCourses] = useState([]);

  // Simulate fetching courses from a local source or an API
  useEffect(() => {
    // Import courses dynamically (in real cases, this might be an API call)
    const fetchedCourses = [
      { id: 1, name: 'MTH 130', instructor: 'Dr. Tester', assignment: new Date(2024, 11, 13, 11, 59, 59) },
      { id: 2, name: 'CIT 340', instructor: 'Dr. Constant', assignment: new Date('Dec 16, 2024 11:59:59') },
      { id: 3, name: 'MIS 699', instructor: 'Dr. Hulabaloo', assignment: new Date('Dec 25, 2024 11:59:59') },
    ];
    setCourses(fetchedCourses);
  }, []);

  const coursesEnrolled = courses.length;

  return (
    <div className={styles.dashboard}>
      <div className={styles.welcomeMessage}>
        <h2>Welcome back, Alex!</h2>
      </div>
      <div className={styles.quickStats}>
        <div className={styles.statCard}>
          <Link href="/courses" passHref>
            <h3>Courses Enrolled</h3>
            <p>{coursesEnrolled}</p>
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
