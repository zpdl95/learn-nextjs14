'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/navigation.module.css';

const route = {
  home: '/',
  'about us': '/about-us',
};

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        {Object.keys(route).map((r, idx) => (
          <li key={idx}>
            <Link href={route[r]}>{r}</Link>{' '}
            {path === route[r] ? <span>📌</span> : <span></span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}
