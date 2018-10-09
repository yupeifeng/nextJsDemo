import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './modules/reducers';

const middleware = [thunk];

const initializeStore = (initialState, options) => {
    return createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    );
};

export default initializeStore;