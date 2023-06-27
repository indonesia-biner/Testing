import React from 'react';
// import icons
import {
  ImWhatsapp,
  ImLinkedin,
  ImInstagram
} from 'react-icons/im';

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href='http://www.whatsapp.com/62895338089088' target='_blank'>
          <ImWhatsapp />
        </a>
      </li>
      <li>
        <a href='http://www.linkedin.com/in/huda-rasyad-wicaksono-2b37191a9/' target='_blank'>
          <ImLinkedin />
        </a>
      </li>
      <li>
        <a href='http://www.instagram.com/masuden0000/' target='_blank'>
          <ImInstagram />
        </a>
      </li>
    </ul>
    
  </div>;
};

export default Socials;
