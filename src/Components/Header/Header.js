import React from 'react';
import classes from './Header.css';
import {NavLink} from 'react-router-dom';
import { HashLink as Linky } from 'react-router-hash-link';



const header=(props)=>{
	return(
			<div className={classes.header}>
				<nav className={classes.nav}>
					<ul className={classes.ul}>
						<li className={classes.li}><NavLink className={classes.a} to="/" exact>Home</NavLink></li>
						<li className={classes.li}><Linky className={classes.a} to="/#contact">Contact</Linky></li>
						<li className={classes.li}><NavLink className={classes.a} to="/register">Sign in </NavLink></li>
						<li className={classes.li}><NavLink className={classes.a} to="/blog">Blog </NavLink></li>
					</ul>
				</nav>				
			</div>			
		);
}


export default header;