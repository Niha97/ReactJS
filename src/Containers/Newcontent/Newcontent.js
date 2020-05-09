import React, { Component } from 'react';
import classes from './Newcontent.css';
import Input from '../../UI/Input/Input';
import axios from '../../axios-content.js';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';
import {connect} from 'react-redux';



class Newcontent extends Component{
	state={      
		contentForm: {
			title: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Title of the article'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			image: {
				elementType: 'input',
				elementConfig: {
					type: 'textarea',
					placeholder: 'Image url'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false

			},
			desc: {
				elementType: 'input',
				elementConfig: {
					type: 'textarea',
					placeholder: 'Short description of the article'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false

			},
			content: {
				elementType: 'textarea',
				elementConfig: {
					type: 'textarea',
					placeholder: 'Content of the article'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false

			}
			
		},
		uploading: false,
		formIsValid: false,


	}

	checkValidity=(value, rules )=>{
		let isValid = false;
		if(rules.required) {
			isValid= value.trim() !== '';
		}
		return isValid;
	}

	onchangehandler=(event, id)=>{
			const updatedElems={
				...this.state.contentForm
			};
			const updatedmember={
				...updatedElems[id]
			};
			updatedmember.value=event.target.value;
			updatedmember.valid=this.checkValidity(updatedmember.value, updatedmember.validation);
			updatedmember.touched=true;
			updatedElems[id]=updatedmember;

			let formIsValid= true;
			for(let elems in updatedElems){
				formIsValid=updatedElems[elems].valid && formIsValid;
			}
			console.log(formIsValid);
			this.setState({contentForm: updatedElems, formIsValid: formIsValid});

	}

	onsubmitContent =(e) =>
	{
		e.preventDefault();
		this.setState({uploading: true});
		const content={
			title: this.state.contentForm.title.value,
			image: this.state.contentForm.image.value,
			description: this.state.contentForm.desc.value,
			content: this.state.contentForm.content.value,
		};
		axios.post('/content.json',content)
		.then(res => {
			this.setState({uploading: false});
			const updatedElems={
				...this.state.contentForm
			};
			for(let elems in updatedElems){
				updatedElems[elems].value='';
			}
			 this.setState({contentForm:updatedElems});
			this.props.changeUploadedTrue();
		});
	}

	componentDidMount(){
		axios.get('/content.json')
			.then((response)=>{
				this.props.setContent(response.data);
			});
	}

	componentDidUpdate(){
		axios.get('/content.json')
			.then((response)=>{
				this.props.setContent(response.data);
			});
	}


	render(){
		const formElement = [];
		for(let key in this.state.contentForm){
			formElement.push({
				id:key,
				config: this.state.contentForm[key]
			})
		}

		let form=(
			<form>
				{formElement.map(el =>(
					<Input inputtype={el.config.elementType} 
					 required
					 value={el.config.value} 
					 key={el.id} 
					 elementConfig={el.config.elementConfig} 
					 clicked={(event)=>this.onchangehandler(event,el.id)}
					 invalid={!el.config.valid}
					 touched={el.config.touched}/>
					))}
				<Button clicked={this.onsubmitContent} disabled={!this.state.formIsValid} btnType="Danger">Submit</Button>	
			</form>

			)
			if ( this.state.uploading) {
			form = <Spinner />;}
			
			

		return(			
			<div style={{textAlign:'center'}}>
				<h4 style={{textAlign:'center'}}> Enter information </h4>

				{form}                		
			</div>);
	}

}

const mapStateToProps = state => {
  return{
  	uploaded: state.uploaded
  	};
  };

 const mapDispatchToProps = dispatch => {
    return{
		changeUploadedTrue: () => dispatch({type: 'UPLOADED_TRUE'}),
		setContent: (data) => dispatch({type: 'SET_CONTENT', value: data}),
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Newcontent);