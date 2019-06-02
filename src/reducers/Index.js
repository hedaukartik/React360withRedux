import { combineReducers } from 'redux';
import PlanListReducer from './PlanListReducer';
//import CurrentReducer from './CurrentReducer';

export default combineReducers({
    plans: PlanListReducer,
    //current: CurrentReducer
});