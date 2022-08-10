import React, {useState} from 'react';

import { SubHeading, MenuItem } from '../../components';
import {images, data} from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';

const Gallery = () => {


  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
      </div>
    </div>
  );
}

export default Gallery;
