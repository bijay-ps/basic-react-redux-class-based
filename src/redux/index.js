import { compose, createStore } from 'redux';

const INITIAL_STATE = {
	amount: 50000
}

const amountReducer = (state=INITIAL_STATE, action) => {

	if (action.type === 'Spend') {
			return {
				...state,
				amount: state.amount - Number(action.payload)
			}
	}

	if (action.type === 'Receive') {
		return {
			...state,
			amount: state.amount + Number(action.payload)
		}
	}

	return state;
}

const enhancers = compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(amountReducer, enhancers);

export default store;