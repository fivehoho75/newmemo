import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga'
import modules from './modules';

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.devToolsExtension ? 
                window.devToolsExtension : () => fn => fn;

const sagaMiddleware = createSagaMiddleware();
const configStore = (initialState) => {
    const enhancers = [
        applyMiddleware(
            sagaMiddleware
        ),
        devtools()
    ];

    const store = createStore(modules, initialState, 
        compose(...enhancers));
    
    //sagaMiddleware.run(modules);

    if ( module.hot ) {
        module.hot.accept('./modules', () => store.replaceReducer(modules));
    }
	
	store.runSaga = sagaMiddleware.run
	store.close = () => store.dispatch(END)
  
    return store;
}

export default configStore;