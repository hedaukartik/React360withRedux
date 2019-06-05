import { FETCH_DEVICES, FETCH_DEVICES_REJECTED, FETCH_DEVICES_FULFILLED, SET_SELECTED_DEVICE, SET_GAZED_DEVICE } from '../actions/Types';

const INITIAL_STATE = {
    devices:[],
    fetching: false,
    fetched:false,
    error: null,
    selected_device : null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_DEVICES: {
            return {...state, fetching:true}
        }

        case FETCH_DEVICES_REJECTED: {
            return { ...state, fetching: false, error: action.payload}
        }

        case FETCH_DEVICES_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched:true,
                devices: action.payload.devices,
            }
        }

        case SET_GAZED_DEVICE: {
            return {
                ...state,
                fetching: false,
                fetched:true,
                devices : action.payload

                
            }
        }

        case SET_SELECTED_DEVICE: {
            return {
                ...state,
                fetching: false,
                fetched:true,
                selected_device : action.payload

                
            }
        }
        default:
        return state;
    }
};