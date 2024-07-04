"use client";
import {
  EnvelopeIcon,
  UserIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavLinks.module.css';

const links = [
  { name: 'Sobre mi', href: '/dashboard', icon: UserIcon },
  {
    name: 'Intereses',
    href: '/dashboard/Interests',
    icon: HeartIcon,
  },
  { name: 'Contacto', href: '/dashboard/ContactForm', icon: EnvelopeIcon },
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <div className={styles.navContainer}>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${styles.link} ${pathName === link.href ? styles.linkActive : ''}`}
          >
            <LinkIcon className={styles.icon} />
            <p className={styles.text}>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
