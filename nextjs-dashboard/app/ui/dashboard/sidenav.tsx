import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import styles from './sidenav.module.css';

export default function SideNav() {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href="/">
        <div className={styles.logoContainer}>
          <img src='/agustin.jpg' className={styles.photo} alt='Agustín Levental' />
          <div className={styles.name}>Agustín Levental</div>
        </div>
      </Link>
      <div className={`${styles.navLinksContainer} md:${styles.navLinksContainerDesktop}`}>
        <NavLinks />
        <div className={`${styles.spacer} md:${styles.spacerDesktop}`}></div>
       
      </div>
    </div>
  );
}
