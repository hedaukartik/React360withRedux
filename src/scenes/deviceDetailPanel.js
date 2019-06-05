import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DeviceDetailView from '../components/DeviceDetailView';
import { store } from '../store/Store';

export default class devicesPanel extends Component {
    render() {
        return (
            <Provider store={store}>
                <DeviceDetailView />
            </Provider>
        );
    }
}