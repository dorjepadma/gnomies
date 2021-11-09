import React from 'react';
// import SocialIcons from '../socialIcons/socialIcons.component';
import { SocialIcon } from 'react-social-icons';
import './footer.styles.scss';

const Footer = () => (
      <div className='footer'>
        {/* <div >
          <p>
            <strong>
            &copy; 2021
           </strong>
          </p>
          </div> */}
         
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

export default Footer;
