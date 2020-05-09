const initialState= {
	adding: false,
	auth: true,
	uploaded: false,
	articles:{}
}

const reducer = (state = initialState, action) => {
	if(action.type=== 'SET_CONTENT'){
		let articles = JSON.parse(JSON.stringify(state.articles));
		return{
			...state,			
			articles:{
				...articles,
				...action.value
				
			}
		}
	}
	
	if(action.type=== 'ADD_TRUE')
	{
		return{
			adding: true,
			...state
		}
	}

	if(action.type=== 'ADD_FALSE')
	{
		return{
			adding: false,
			...state
		}
	}

	if(action.type=== 'UPLOADED_TRUE')
	{
		return{
			...state,
			uploaded: true
		}
	}


	return state;

}

export default reducer;