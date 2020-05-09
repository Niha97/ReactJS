import React from 'react';
import classes from './Banner.css';
import Social from '../Social/Social';


const banner=(props)=>{
	return(
		<div className={classes.header}>
			<div className={classes.banner}>
				<h1 className={classes.name}>Niharika Gandhari</h1>
				<Social />
			</div>
		</div>
	);
}

export default banner;