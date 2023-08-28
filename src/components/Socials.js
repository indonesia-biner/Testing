import React from 'react';
// import icons
import {
  ImWhatsapp,
  ImLinkedin,
  ImGithub
} from 'react-icons/im';

const Socials = () => {
  return <div>
    <ul className='flex gap-x-4'>
      <li>
        <a href='http://www.whatsapp.com/6289673353210' target='_blank'>
          <ImWhatsapp />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/huda-rasyad-wicaksono-2b37191a9' target='_blank'>
          <ImLinkedin />
        </a>
      </li>
      <li>
        <a href='https://github.com/masuden0000' target='_blank'>
          <ImGithub />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
