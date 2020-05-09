import React, { Component } from 'react';
import classes from './Homecontents.css'
import Banner from '../../Components/Banner/Banner';




class Homecontents extends Component {  
    render() {           
        return (
          <div className={classes.home}>
               <Banner />

             
              
          </div> 
          );
    }
}


export default Homecontents; 