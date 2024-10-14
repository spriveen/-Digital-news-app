'use client';

import React,{useState} from 'react';
import './header.css';
import Nav from './Nav';
import Sci from './Sci';


export default function Header() {
  return(
    <header id='header' 
    className='header d-flex algin-items-center fixed-top'
    >
   <div className='container-flud container-xl d-flex algin-items-center justify-content-between'>
    <a href='/' className='logo d-flex algin-items-center'>
    {/* <img src='' alt='' */}
    <h1>Digital News</h1>
    </a>
    <Nav />
    <div className='position-relative'> 
      <Sci />
    </div>
    </div>
    </header>
  )
  }
