import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload.data;
        default:
            return state;
    }
};
// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload.data;
        default:
            return state;
    }
};
// Create one store that all components can use
const storeInstance = createStore(combineReducers({
    projects,
    tags,
}),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger));
// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
