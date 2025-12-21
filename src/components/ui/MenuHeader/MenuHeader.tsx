import React from 'react';

export interface MenuHeaderProps {
  label: string;
  href: string;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ label, href }) => {
  return (
    <a href={href} className="menu-header-link">
      {label}
    </a>
  );
};

export default MenuHeader;