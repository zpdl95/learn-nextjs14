'use client';

import { useRouter } from 'next/navigation';
import styles from '../styles/backBtn.module.css';

export default function BackBtn() {
  const router = useRouter();
  const onClick = () => router.back();
  return (
    <div className={styles.icon} onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 -960 960 960'
        width='24px'
      >
        <path d='M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z' />
      </svg>
    </div>
  );
}
