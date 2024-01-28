'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-primary p-4 ${
        scrolled ? 'shadow-md' : ''
      } fixed w-full top-0 z-50`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href="/" className="text-secondary text-xl font-bold">
            HYNND
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#pricing">Pricing & Plans</NavLink>
          <NavLink href="#instructors">Instructors</NavLink>
          <NavLink href="#testimonies">Testimonies</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-secondary font-medium hover:text-blue-900"
    >
      {children}
    </Link>
  );
};

export default Navbar;
