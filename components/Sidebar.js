// components/Sidebar.js

"use client"; // This marks the component as a Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Sidebar.module.css'; // Ensure this file exists

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <Link href="/" className={pathname === '/' ? styles.active : ''}>Dashboard</Link>
          </li>
          <li>
            <Link href="/courses" className={pathname === '/courses' ? styles.active : ''}>Courses</Link>
          </li>
          <li>
            <Link href="/assignments" className={pathname === '/assignments' ? styles.active : ''}>Assignments</Link>
          </li>
          <li>
            <Link href="/study-planner" className={pathname === '/study-planner' ? styles.active : ''}>Study Planner</Link>
          </li>
          <li>
            <Link href="/ai-assistant" className={pathname === '/ai-assistant' ? styles.active : ''}>AI Assistant</Link>
          </li>
          <li>
            <Link href="/content-simplifier" className={pathname === '/content-simplifier' ? styles.active : ''}>Content Simplifier</Link>
          </li>
          <li>
            <Link href="/progress-tracker" className={pathname === '/progress-tracker' ? styles.active : ''}>Progress Tracker</Link>
          </li>
          <li>
            <Link href="/settings" className={pathname === '/settings' ? styles.active : ''}>Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
