import React from 'react';
import MenuFooter from '../../ui/MenuFooter';
import ThemedImage from '../../ui/ThemedImage';
import SocialIconLink from '../../ui/SocialIconLink';

const Footer: React.FC = () => {
  return (
    <footer className="px-4 py-6 md:px-[140px] md:py-10">
      <div className="footer-box grid gap-6 rounded-3xl p-5 border-1 md:p-10 md:gap-15">
        <div className="flex flex-col gap-6 md:flex-row md:relative md:gap-0">
          <ThemedImage
            lightSrc="Logo_footer-light.svg"
            darkSrc="/Logo_footer.svg"
            alt="Logo (footer)"
            className="w-[140px] md:absolute md:top-0 md:right-0"
          />

          <p className="font-bold text-3xl md:w-[15ch]">
            LET'S DISCUSS YOUR IDEAS
          </p>
        </div>

        <div className="footer-divider border-1" />

        <nav className="grid gap-6 text-sm md:flex md:items-center md:justify-between md:text-base">
          <div className="grid gap-5 md:flex md:justify-left">
            <MenuFooter label="About" href="#hero" />
            <MenuFooter label="Service" href="#service" />
            <MenuFooter label="Projects" href="#projects" />
            <MenuFooter label="Testimonials" href="#testimonials" />
            <MenuFooter label="FAQ" href="#faq" />
          </div>

          <div className="flex gap-4">
            <SocialIconLink
              href="#"
              alt="Facebook"
              lightSrc="Facebook-light.svg"
              darkSrc="/Type=Facebook.svg"
            />
            <SocialIconLink
              href="#"
              alt="Instagram"
              lightSrc="Instagram-light.svg"
              darkSrc="/Type=Instagram.svg"
            />
            <SocialIconLink
              href="#"
              alt="LinkedIn"
              lightSrc="LinkedIn-light.svg"
              darkSrc="/Type=Linkedin.svg"
            />
            <SocialIconLink
              href="#"
              alt="TikTok"
              lightSrc="Tiktok-light.svg"
              darkSrc="/Type=Tik Tok.svg"
            />
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;