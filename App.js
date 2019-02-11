import React, {Component} from 'react';
import { createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/reducers';
import Home from './src/screens/Home';

const store = createStore(rootReducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        );
    }
}
