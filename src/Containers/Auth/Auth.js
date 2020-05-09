import React, {Component} from 'react';
import Input from '../../UI/Input/Input';
import classes from './Auth.css';
import Button from '@material-ui/core/Button';

class Auth extends Component{
	state={
		registerForm: {
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'username or email'
				},
				value: ''
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'textarea',
					placeholder: 'password'
				},
				value: ''

			}
		}

	}

	onchangehandler=(event, id)=>{
			const updatedElems={
				...this.state.registerForm
			};
			const updatedmember={
				...updatedElems[id]
			};
			updatedmember.value=event.target.value;
			updatedElems[id]=updatedmember;
			this.setState({registerForm: updatedElems});

	}

	render(){
		const formElement = [];
		for(let key in this.state.registerForm){
			formElement.push({
				id:key,
				config: this.state.registerForm[key]
			})
		}
		return(
			<div className={classes.body}>
			<div className={classes.contactB}>
				<h4>Enter your information to log in</h4>
				<form>
					{formElement.map(el =>(
					<Input inputtype={el.config.elementType} 
					 value={el.config.value} 
					 key={el.id} 
					 elementConfig={el.config.elementConfig} 
					 clicked={(event)=>this.onchangehandler(event,el.id)}/>
					))}

				</form>
				<Button size="small" color="primary">
				        Log in
				      </Button>
				      <Button size="small" color="primary">
				        Register
				      </Button>
			</div>
			</div>

			);
	}
}

export default Auth;