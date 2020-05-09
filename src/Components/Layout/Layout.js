import React from 'react';
import Aux from '../../Hoc/Auxilary'

const layout = (props) => {
		return(
		<Aux>			
			<main>
				{props.children}
			</main>
		</Aux>
		)
		
 };

export default layout;