import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PlansView from '../components/PlansView';
import { store } from '../store/Store';

export default class plansPanel extends Component {
    render() {
        return (
            <Provider store={store}>
                <PlansView />
            </Provider>
        );
    }
}