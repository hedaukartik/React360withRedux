import { FETCH_SELECTED_DEVICE, SET_SELECTED_DEVICE_COLOR, SET_GAZED_DEVICE_COLOR } from './Types';

export const selectedDeviceFetch = () => {
    var selectedDevice = { 
      type: FETCH_SELECTED_DEVICE,
      payload: null
  }
  
  
    return (dispatch) => {
  
      dispatch(selectedDevice);
    };
    
   
  }
  
export const setSelectedDeviceColor = (value) => {
    return ({ type: SET_SELECTED_DEVICE_COLOR, payload: value });
  };

export const setGazedDeviceColor = (value) => {
    return ({ type: SET_GAZED_DEVICE_COLOR, payload: value });
  };

  