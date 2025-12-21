import React from 'react';
import ThemedImage from '../ThemedImage';

export interface SocialIconLinkProps {
  href: string;
  alt: string;
  lightSrc: string;
  darkSrc: string;
}

const SocialIconLink: React.FC<SocialIconLinkProps> = ({
  href,
  alt,
  lightSrc,
  darkSrc,
}) => {
  return (
    <a href={href}>
      <ThemedImage
        lightSrc={lightSrc}
        darkSrc={darkSrc}
        alt={alt}
        className="footer-social rounded-full border-1"
      />
    </a>
  );
};

export default SocialIconLink;