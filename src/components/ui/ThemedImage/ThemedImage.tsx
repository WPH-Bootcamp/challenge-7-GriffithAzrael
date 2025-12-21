import React from 'react';

export interface ThemedImageProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  className?: string;
}

const ThemedImage: React.FC<ThemedImageProps> = ({
  lightSrc,
  darkSrc,
  alt,
  className = '',
}) => {
  return (
    <>
      <img className={`show-when-light ${className}`} src={lightSrc} alt={alt} />
      <img className={`show-when-dark ${className}`} src={darkSrc} alt={alt} />
    </>
  );
};

export default ThemedImage;