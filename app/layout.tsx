import { Metadata } from 'next';
import Navigation from '../components/navigation';
import '../styles/global.css';
import styles from '../styles/global-inline-margin.module.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Next Movies',
  },
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        <div className={styles.wrapper}>{children}</div>
      </body>
    </html>
  );
}
