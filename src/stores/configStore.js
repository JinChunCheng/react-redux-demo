import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index.js';
import DevTools from './DevTools';
import thunk from 'redux-thunk';

const initialState = {};
const configStore = () => {
    const finalStore = compose(applyMiddleware(thunk), DevTools.instrument())(
        createStore
    );
    const store = finalStore(rootReducer, initialState);
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};
export default configStore;
