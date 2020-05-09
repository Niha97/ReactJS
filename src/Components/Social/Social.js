import React from 'react';
import classes from './Social.css';

import FontAwesome from 'react-fontawesome';

const social=(props)=>{
	return(
				<div>
					<ul className={classes.social}>
                     <li><a href=""><FontAwesome  name='envelope' size='2x' style={{ color:'white'}}/></a></li>    
                     <li><FontAwesome  name='linkedin' size='2x' style={{ color:'white'  }}/></li>
                     <li><FontAwesome  name='github' size='2x' style={{ color:'white'  }}/></li>
                     <li><FontAwesome  name='instagram' size='2x' style={{ color:'white'  }}/></li>
                   </ul>
				</div>
		);
	}

export default social;