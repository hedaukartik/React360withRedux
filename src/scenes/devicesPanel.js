import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevicesView from '../components/DevicesView';
import { store } from '../store/Store';

export default class devicesPanel extends Component {
    render() {
        return (
            <Provider store={store}>
                <DevicesView />
            </Provider>
        );
    }
}