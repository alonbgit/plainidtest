import React from 'react';
import classes from './Logo.scss';
import LogoImage from '../../assets/images/plainid-logo-white.png';

const logo = (props) => (
  <img className={classes.Logo} src={LogoImage} alt=""/>
)

export default logo;
