import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'styles/main.scss';
import Root from './containers/Root';
import configStore from './store/config';
import rootSaga from 'sagas';

const store = configStore();
store.runSaga(rootSaga);

const render = (Component) => {
    ReactDOM.render(<Component store={store}/>, 
        document.getElementById('root'));
}

render(Root);

if ( module.hot ) {
    module.hot.accept('./containers/Root', () => render(Root));
};

registerServiceWorker();
