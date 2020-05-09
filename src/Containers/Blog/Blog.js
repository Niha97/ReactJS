import React, { Component } from 'react';
import classes from './Blog.css';
import Article from '../../Components/Article/Article';
import Newcontent from '../Newcontent/Newcontent';
import Search from '../Search/Search';
import axios from '../../axios-content.js';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';




class blog extends Component{	

	render(){
		
		const art=Object.keys(this.props.contents).map((article)=>{
			return 	<Link to={'/blog/'+ article}><Article title={this.props.contents[article].title} 
							desc={this.props.contents[article].description} 
							image={this.props.contents[article].image} 
							
							/></Link>
		})

		return(
			<div className={classes.body}>
				<div className={classes.topbackground}></div>
				<div className={classes.search}><Search/></div>
				<div className={classes.articles}>
					{art}					
				</div>
				<div className={classes.newArticle}><Newcontent/></div>
				
			</div>
			)
	}
}

const mapStateToProps = state => {
	return{
		contents: state.articles
		};
	};

	
	
export default  connect(mapStateToProps)(blog);