import { combineReducers } from 'redux';
import PlanListReducer from './PlanListReducer';
import DeviceListReducer from './DeviceListReducer';
import SelectedDeviceReducer from './SelectedDeviceReducer';

//import CurrentReducer from './CurrentReducer';

export default combineReducers({
    plans: PlanListReducer,
    devices: DeviceListReducer,
    selectedDevice: SelectedDeviceReducer
    //current: CurrentReducer
});