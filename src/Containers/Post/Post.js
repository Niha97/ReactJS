import React, { Component } from 'react';
import classes from './Post.css';
import axios from '../../axios-content';

class Post extends Component {

  state={
    selectedPost: '',
  }


  componentDidMount(){
    console.log(this.props.match.params.id);
    axios.get('/content.json')
    .then((response)=>{
      let post=response.data[this.props.match.params.id];
      this.setState({selectedPost: post});
      
    })
    .catch((error)=>{
      console.log(error);
    });

  }
 
    render() {   
        
      return (
        <div className={classes.body}>
           <div className={classes.topbackground}>
          </div>
          <div className={classes.post}>
              <img src={this.state.selectedPost.image} ></img>
              <h1>{this.state.selectedPost.title}</h1>
              <h4>{this.state.selectedPost.description}</h4>
              <p>{this.state.selectedPost.content}</p>
            </div>
          </div>
            );
    }
  
  }

export default Post;