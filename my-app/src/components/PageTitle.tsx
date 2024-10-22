import React from 'react';
import './pageTitle.css';

export default function PageTitle({title}:{title: string}) {
  return <h3 className='catagory-title'>{title}</h3>;
  
}
