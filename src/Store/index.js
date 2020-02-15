import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/index';

function configureStore(initialState) {
	// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	// const store = createStore(rootReducer, initialState, composeEnhancers(
	//     applyMiddleware(thunk)
	//   ));

	const composeEnhancers =
		typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
					// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
					latency: 0,
			  })
			: compose;

	const enhancer = composeEnhancers(
		applyMiddleware(thunk)
		// other store enhancers if any
	);
	const store = createStore(rootReducer, enhancer);
	return store;
}

export default configureStore();
