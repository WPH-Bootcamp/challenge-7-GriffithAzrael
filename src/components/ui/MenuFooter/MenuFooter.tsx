import React from 'react';

export interface MenuFooterProps {
  label: string;
  href: string;
}

const MenuFooter: React.FC<MenuFooterProps> = ({ label, href }) => {
  return (
    <a href={href} className="menu-footer-link">
      {label}
    </a>
  );
};

export default MenuFooter;