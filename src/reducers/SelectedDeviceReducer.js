import { SET_SELECTED_DEVICE, SET_SELECTED_DEVICE_COLOR, FETCH_SELECTED_DEVICE, SET_GAZED_DEVICE_COLOR } from '../actions/Types';

const INITIAL_STATE = {
    selected_device: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case FETCH_SELECTED_DEVICE: {
            return { ...state }
        }
        
        case SET_SELECTED_DEVICE: {
            return {
                ...state,
                selected_device : action.payload

                
            }
        }
        case SET_SELECTED_DEVICE_COLOR: {
            return {
                ...state,
                selected_device : {...state.selected_device, colors: action.payload },
            }
        }

        case SET_GAZED_DEVICE_COLOR: {
            return {
                ...state,
                selected_device : {...state.selected_device, colors: action.payload },
            }
        }
        
        
        default:
        return state;
    }
};