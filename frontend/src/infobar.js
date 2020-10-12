import React from 'react';

import avtar from './icons/avtar1.jpg';
import videochat from './icons/iconv.ico';


const InfoBar = () => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={avtar} alt="online icon" />
      <h3 style={{marginLeft:10}}><b>WEBRTC TECH</b></h3>
    </div>
    <div className="rightInnerContainer">
      <img  className="video-chat" src={videochat} alt="video call" />
    </div>
  </div>
);

export default InfoBar;
