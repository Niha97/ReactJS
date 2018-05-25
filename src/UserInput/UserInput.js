import React from 'react';
import './UserInput.css'

const userinput = (props) => {
	return(
		<div className="userinput">
		<input type="text" onChange={props.changed} value={props.name} />
		</div>
		)
 };

export default userinput;