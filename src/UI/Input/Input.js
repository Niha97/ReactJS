import React from 'react';
import classes from './input.css';
import Button from '../Button/Button';

const input = (props) => {
	let inputElement=null;
	let validationError=null;
	const inputClasses = [classes.InputElement];
	if (props.invalid && props.touched) {
		inputClasses.push(classes.Invalid);
		
	}

	switch(props.inputtype){
		case('input'):
			inputElement=<input 
							className={inputClasses.join(' ')} 
							{...props.elementConfig} 
							value={props.value} 
							onChange={props.clicked}/>;
			break;
		case('textarea'):
			inputElement=<textarea 
							className={[inputClasses.join(' '), classes['textArea']].join(' ')} 
							{...props.elementConfig} 
							value={props.value} 
							onChange={props.clicked}/>;
			break;
		case('select'):
			inputElement=<select 
							className={classes.InputElement} 
							value={props.value} 
							onChange={props.clicked}>					
								{props.elementConfig.options.map(option =>(
									<option value={option.value}>{option.displayValue}</option>
								))}
						</select>;
			break;
		case('file'):
			inputElement=(<div><input {...props.elementConfig}/>
						  <Button btnType='Add' clicked={props.clicked}> Upload</Button></div>)

			break;
		default:
			inputElement=<input  
							className={classes.InputElement}  
							{...props.elementConfig} />;
			break;

	}
	return(
	<div className={classes.Input}>
			<label className={classes.label}>{props.label}</label>
			{inputElement}
				
	</div>

		);
};


export default input;