import SideNav from "../ui/dashboard/sidenav";
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <SideNav />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
