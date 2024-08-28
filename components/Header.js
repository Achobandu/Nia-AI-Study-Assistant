// components/Header.js

import React from 'react';
import Link from 'next/link';
import {Avatar, AvatarIcon} from "@nextui-org/react";
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Nia AI</div>
      <nav className={styles.nav}>
        <Link href="/profile" className={styles.navLink}>
          <Avatar style={{ height: '1px' }}  className={styles.customAvatar}
            icon={<AvatarIcon />}
          />
        </Link>
        <Link href="/logout" className={styles.navLink}>
          <button className={styles.logoutBtn}>Logout</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
