import { FETCH_PLANS, FETCH_PLANS_REJECTED, FETCH_PLANS_FULFILLED, SET_SELECTED_PLAN, SET_GAZED_PLAN } from '../actions/Types';

const INITIAL_STATE = {
    plans:[],
    fetching: false,
    fetched:false,
    error: null,
    selected_plan : null
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
                plans: action.payload.plans,
            }
        }

        case SET_GAZED_PLAN: {
            return {
                ...state,
                fetching: false,
                fetched:true,
                plans : action.payload

                
            }
        }

        case SET_SELECTED_PLAN: {
            return {
                ...state,
                fetching: false,
                fetched:true,
                selected_plan : action.payload

                
            }
        }
        default:
        return state;
    }
};