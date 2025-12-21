import React from 'react';

export type MobileMenuLink = {
  label: string;
  href: string;
};

interface MobileMenuProps {
  links: MobileMenuLink[];
  contactHref?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  links,
  contactHref = '#messageform',
}) => {
  const closeMenu = () => {
    const checkbox = document.getElementById(
      'nav-toggle'
    ) as HTMLInputElement | null;
    if (checkbox) checkbox.checked = false;
  };

  return (
    <div
      id='mobileMenu'
      className='
        mobile-menu-overlay
        fixed inset-0 z-[60] md:hidden
        opacity-0 pointer-events-none translate-y-2
        transition duration-300 ease-out
        peer-checked:opacity-100 peer-checked:pointer-events-auto peer-checked:translate-y-0
        motion-reduce:transition-none
      '
    >
      {/* Backdrop close */}
      <label
        htmlFor='nav-toggle'
        className='absolute inset-0 cursor-pointer'
        aria-hidden='true'
      />

      <div className='relative z-10 grid min-h-screen grid-rows-[auto_1fr_auto]'>
        <div className='flex items-center justify-between h-16 px-4 pt-[env(safe-area-inset-top)]'>
          {/* Logo swap */}
          <img
            src='Logo-large-light.svg'
            alt='Company logo'
            className='show-when-light'
          />
          <img src='Logo.svg' alt='Company logo' className='show-when-dark' />

          {/* Close button */}
          <label
            htmlFor='nav-toggle'
            className='inline-grid place-items-center size-10 translate-x-2 rounded-md cursor-pointer focus:outline-none'
            aria-label='Close menu'
          >
            <img
              src='x-close-light.svg'
              alt='Close menu'
              className='show-when-light'
            />
            <img
              src='x-close.svg'
              alt='Close menu'
              className='show-when-dark'
            />
          </label>
        </div>

        <nav className='px-4'>
          <ul className='space-y-5.5 font-semibold text-sm'>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className='mobile-menu-link'
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={contactHref}
            onClick={closeMenu}
            className='mt-8 inline-flex w-full text-sm leading-7 items-center justify-center rounded-full bg-[#FF623E] shadow-[inset_4px_4px_4px_0px_#FFFFFF50] py-2 font-semibold text-white hover:brightness-110 focus:outline-none'
          >
            Let&apos;s Talk
          </a>
        </nav>

        <div className='pb-[env(safe-area-inset-bottom)]' />
      </div>
    </div>
  );
};

export default MobileMenu;
