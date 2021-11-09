import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { Container } from 'react-bootstrap';

const SocialIcons = () => {
  return (   
<div className='social'>
  <div className='socialIcon'>
        <p>Join our Discord</p>
      <SocialIcon url="https://discord.gg/5BfmJ8ew" />
  </div>
  <div className='socialIcon'>
      <p>Follow us on Twitter</p>
      <SocialIcon url="https://twitter.com/GnomiesNFT" />
  </div>
</div>
  );
};

export default SocialIcons;
