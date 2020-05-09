import React, { Component } from 'react';
import classes from './Search.css';


import FontAwesome from 'react-fontawesome';



class Search extends Component{	

    state={
        searchinput: '',
    }

	render(){	
          return(
            <div className={classes.search}>
                <input type="text" value={this.state.searchinput} placeholder="Search.." name="search"/>
                <FontAwesome  name='search' size='1x' className={classes.icon}/>
            </div>  
			)
	}
}

export default Search;