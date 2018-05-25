import React from 'react';
import './UserOutput.css';


const useroutput = (props) => {
	return(
		<div className="useroutput">
			<p>I am {props.name}</p>
			<p>The most challenging part of the assignment is to keep track of concepts</p>
		</div>
		)
 };

export default useroutput;