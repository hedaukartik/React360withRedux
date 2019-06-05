import { combineReducers } from 'redux';
import PlanListReducer from './PlanListReducer';
import DeviceListReducer from './DeviceListReducer';
//import CurrentReducer from './CurrentReducer';

export default combineReducers({
    plans: PlanListReducer,
    devices: DeviceListReducer
    //current: CurrentReducer
});