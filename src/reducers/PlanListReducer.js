import { FETCH_PLANS, FETCH_PLANS_REJECTED, FETCH_PLANS_FULFILLED } from '../actions/Types';

const INITIAL_STATE = {
    plans:[],
    fetching: false,
    fetched:false,
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PLANS: {
            return {...state, fetching:true}
        }

        case FETCH_PLANS_REJECTED: {
            return { ...state, fetching: false, error: action.payload}
        }

        case FETCH_PLANS_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched:true,
                plans: action.payload,
            }
        }
        default:
        return state;
    }
};