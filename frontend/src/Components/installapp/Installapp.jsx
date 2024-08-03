import React from 'react';
import './Installapp.css';
import { assets } from '../../assets/assets'; 

const InstallApp = () => {
  return (
    <div className="downloadapp">
      <h1 className='text'>For better experience, download our Tomato app</h1>
      <div className="appstore">
        <img src={assets.play_store} alt="Google Play Store" />
        <img src={assets.app_store} alt="Apple App Store" />
      </div>
    </div>
  );
}

export default InstallApp;