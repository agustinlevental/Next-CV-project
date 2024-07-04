import React, { ReactNode } from 'react';
import SideNav from "../ui/dashboard/Navigator";
import styles from './layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <SideNav />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
