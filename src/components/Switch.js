import React from 'react';
import Img from 'react-image';
import '../App.css';
import SwitchForm from './SwitchForm';

class Switch extends React.Component {
    render() {
      return (
        <div className="container">
        <Img className="image-size  " src={[ 'http://3.bp.blogspot.com/-JOrA403AHm4/U1_BPWOYxFI/AAAAAAAAAO0/_TXl4eM59Xc/s1600/arsitekture-jaringan.jpg' ]}
          />
        <SwitchForm />
        </div>
      );
    }
  }

export default Switch;