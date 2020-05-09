import React from 'react';
import classes from './Contents.css';
const assets =require('../../Assets/assets');


const contents = (props) => {
	let path=props.img;

	
	return(
		<div className={classes.contents}>
			<div className={classes.left}><img src={assets[props.img]}></img></div>
			{/*<div className={classes.right}>
				<h4>{props.title}</h4>
				<p>{props.desc}</p>
				<h6>{props.date}</h6>
			</div>*/}
			<div className={classes.end}>
				{props.delete}
			</div>
		</div>
		)
 };

export default contents;