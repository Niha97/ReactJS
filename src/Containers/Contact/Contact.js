import React, { Component } from 'react';
import classes from './Contact.css';
import Input from '../../UI/Input/Input';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';



class contact extends Component{
	
	state={
		contactForm: {
			name: {				
				elementType: 'input',
				elementConfig: {
					type: "text",
					placeholder: "Enter your name"
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: "email",
					placeholder: "Enter your email address"
				},
				value: '',
				validation: {
					required: true
				},
				valid:false
			},
			message: {
				elementType: 'textarea',
				elementConfig: {
					type: "textarea",
					placeholder: "Enter your message"
				},
				value: '',
				validation: {
					required: true
				},
				valid:false
			},

			sex: {
				elementType: 'select',
				elementConfig: {
					options: [
						{value: 'male' , displayValue: 'Male'},
						{value:'female', displayValue: 'Female'}
					],

				},
				validation:{
					required:false
				},
				value: ''
			}
		}
	}
	

	checkValidity=(value,rules)=>{
		let isValid=true;
		if(rules.required){
			isValid= value.trim()!=='' && isValid;
		}
		return isValid;
	}

	onchangehandler=(event, id)=>{
		const updatedElems={
			...this.state.contactForm
		};
		const updatedmember={
			...updatedElems[id]
		};
		updatedmember.value=event.target.value;
		updatedmember.valid= this.checkValidity(updatedmember.value, updatedmember.validation);
		updatedElems[id]=updatedmember;
		this.setState({contactForm: updatedElems});

	}



	render(){
		
		const formElements=[];
		for(let key in this.state.contactForm ){
			formElements.push({
				id: key,
				config: this.state.contactForm[key]
			});
		}
		let form=(
				<form >
					{formElements.map(formElement =>(
							<Input inputtype={formElement.config.elementType} 
								   key={formElement.id}
								   elementConfig={formElement.config.elementConfig}
								   value={formElement.config.value}
								   clicked={(event)=>this.onchangehandler(event,formElement.id)}
								  /> 

							))}
				</form>
			)
		return(
			<div className={classes.body}>
 				<h3> If you have any questions please let me know </h3> 				
 				<div className={classes.contactB}> 
 					<h4> Enter your contact data </h4>
 					{form}
					 <div className={classes.button}>	 	
					 <Button variant="contained" color="primary"  > Send
       						 <Icon >send</Icon>
      				</Button>
					</div>			
 				</div>
 			</div>

			);
	}
}
export default  contact;