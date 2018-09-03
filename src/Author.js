import React from 'react';
import './Author.css';

// Create an Author component

const Author = (props) => {

  return (
		<div className='author-info'>
		  <img src={props.author.authImg} className='author-image' />
		  <div className='author-text'>
		    <h4>{props.author.authName}</h4>
		    <h4>{props.author.estTime} read</h4>
		  </div>
		</div>
  )
}


export default Author;