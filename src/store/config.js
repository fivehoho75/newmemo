import { createStore, applyMiddleware, compose } from 'redux';
import sagaMiddleware from 'redux-saga';
import modules from './modules';

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.devToolsExtension ? 
                window.devToolsExtension : () => fn => fn;

const configStore = (initialState) => {
    const enhancers = [
        applyMiddleware(
            sagaMiddleware()
        ),
        devtools()
    ];

    const store = createStore(modules, initialState, 
        compose(...enhancers));
    
    //sagaMiddleware.run(modules);

    if ( module.hot ) {
        module.hot.accept('./modules', () => store.replaceReducer(modules));
    }

    return store;
}

export default configStore;