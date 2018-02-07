import * as actionType from '../action/actionType';

const initState = {
	index: 0 
};

export default function information(state = initState, action ){
	switch(action.type) {
		case actionType.FINANCIAL_NEWS:
			return {
				index: action.index
			}
		default:
			return state
	}
}