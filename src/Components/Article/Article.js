import React, { Component } from 'react';
import classes from './Article.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FontAwesome from 'react-fontawesome';


const styles = {
  card: {
		maxWidth: 745,
		minwidth: 745,
		width: 360,
		height: 550,
		marginBottom: 60,
		borderRadius: '10px',
		display: 'inline-block',
		margin: 30, //outside card
		position:'relative',
		transition: 'transform .3s,box-shadow .3s',
		'&:hover' : {
			boxShadow: '0 10px 22px 0 rgba(112,128,175,0.2)',
    	transform: 'scale(1.03)',
		}
  },
  media: {
    height: 0,
		paddingTop: '62.25%', // 16:9 inside card
	},
	edit: {
		position: 'absolute',
		top: 10,
		right: 10,
		opacity: 0.5,
		'&:hover': {
			color: 'black',
			cursor:'pointer',
			opacity: 1,
    }
	}

};


const article=(props)=>{
		const {classes}	= props;
	
		return(			
				<Card className={classes.card} >
				    <CardMedia
				      className={classes.media}
				      image={props.image}
				      title="Contemplative Reptile"
				    />
            <FontAwesome   className={classes.edit} name='ellipsis-v' size='1.6x' style={{ color:'white' }}/>
					
				    <CardContent>
				      <Typography gutterBottom variant="headline" component="h2">
				        {props.title}
				      </Typography>
				      <Typography component="p">
				        {props.desc}
				      </Typography>
				    </CardContent>
				    <CardActions>
				      <Button size="small" color="primary">
				        Share
				      </Button>
				      <Button size="small" color="primary">
				        Learn More
				      </Button>
				    </CardActions>
			      </Card>				
		   
			)
}


article.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(article);
