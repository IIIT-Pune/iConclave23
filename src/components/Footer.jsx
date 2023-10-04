import React from 'react';
import { AiFillMail } from 'react-icons/ai'; // Mail icon
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa'; // Twitter icon
import '../index.css';

const Footer = ({ textColor, invert, socialMediaLinks }) => {
  const footerStyle = {
    backgroundColor: 'transparent',
    color: textColor,
  };

  // Define the size for the icons
  const iconSize = 'h-6 w-6'; // Adjust the size as needed

  // Define default social media links
  const defaultSocialMediaLinks = {
    mail: 'mailto:iconclave@iiitp.ac.in',
    instagram: 'https://www.instagram.com/iconclave_iiitp/',
    linkedin: 'https://www.linkedin.com/company/iconclave/',
    twitter: 'https://twitter.com/iconclave_iiitp',
  };

  // Merge provided socialMediaLinks with default links
  const mergedSocialMediaLinks = { ...defaultSocialMediaLinks, ...socialMediaLinks };

  return (
    <footer className='relative bottom-0'>
      <div className="flex flex-col">
        <div className="flex justify-center items-center h-20 gap-5">
          <a href={mergedSocialMediaLinks.mail}>
            <AiFillMail className={` ${iconSize}`} color={textColor} />
          </a>
          <a href={mergedSocialMediaLinks.instagram}>
            <AiFillInstagram className={` ${iconSize}`} color={textColor} />
          </a>
          <a href={mergedSocialMediaLinks.linkedin}>
            <AiFillLinkedin className={`${iconSize}`} color={textColor} />
          </a>
          <a href={mergedSocialMediaLinks.twitter}>
            <FaTwitter className={` ${iconSize}`} color={textColor} />
          </a>
        </div>

        <footer
          style={footerStyle}
          className="font-miso flex justify-center items-center h-2 pb-10 text-2xl"
        >
          {invert ? (
            <img src="/images/footerwhite.png" alt="localhost x blueprint" className="h-8" />
          ) : (
            <img src="/images/footerblack.png" alt="localhost x blueprint" className="h-8" />
          )}
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
