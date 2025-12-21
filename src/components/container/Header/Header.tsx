import React from 'react';
import ButtonHeader from '../../ui/ButtonHeader';
import MenuHeader from '../../ui/MenuHeader';
import MobileMenu from '../../ui/MobileMenu';
import ThemeToggle from '../../ui/ThemeToggle/ThemeToggle';

type NavLink = { label: string; href: string };

const Header: React.FC = () => {
  const links: NavLink[] = [
    { label: 'About', href: '#hero' },
    { label: 'Service', href: '#service' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header className='header-box sticky left-0 right-0 top-0 z-50 backdrop-blur-2xl border-b'>
        <div className='mx-auto flex h-16 items-center justify-between px-4 md:px-35 md:h-21'>
          <img
            src='Logo-large-light.svg'
            alt='Company logo'
            className='show-when-light'
          />
          <img src='/Logo.svg' alt='Company logo' className='show-when-dark' />

          <nav className='header-menu hidden md:flex md:gap-3 md:font-semibold'>
            {links.map((link) => (
              <MenuHeader key={link.href} label={link.label} href={link.href} />
            ))}
          </nav>

          <ButtonHeader />

          {/* Mobile hamburger trigger */}
          <label
            htmlFor='nav-toggle'
            className='menu-trigger md:hidden inline-grid place-items-center size-10 translate-x-2 rounded-md cursor-pointer focus:outline-none'
            aria-controls='mobileMenu'
            aria-haspopup='menu'
          >
            <img
              src='menu_icon-light.svg'
              alt='Open menu'
              className='size-6 show-when-light'
            />
            <img
              src='menu_icon.svg'
              alt='Open menu'
              className='size-6 show-when-dark'
            />
            <span className='sr-only'>Open menu</span>
          </label>
        </div>
      </header>

      <input id='nav-toggle' type='checkbox' className='peer sr-only' />

      <MobileMenu links={links} contactHref='#messageform' />

      {/* fixed bottom-right theme toggle */}
      <ThemeToggle />
    </>
  );
};

export default Header;
