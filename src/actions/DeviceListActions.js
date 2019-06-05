import { FETCH_DEVICES, FETCH_DEVICES_REJECTED, FETCH_DEVICES_FULFILLED, SET_SELECTED_DEVICE, SET_GAZED_DEVICE } from './Types';
//import { POLY_PATH, API_KEY } from '../consts/PolyApi';

export const devicesFetch = () => {
  var deviceList = {
    type: FETCH_DEVICES_FULFILLED,
    payload: {
        devices: [
            {
              name: "Iphone XR",
              decrptipn: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum",
              gazed: false,
              selected: false
            },
            {
              name: "Samsung Galaxy S8",
              decrptipn: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum",
              gazed: false,
              selected: false
            },
            {
              name: "Iphone 6s",
              decrptipn: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum",
              gazed: false,
              selected: false
            },
            {
              name: "Note 7",
              decrptipn: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum",
              gazed: false,
              selected: false
            }
          ]
    }
}

  return (dispatch) => {

    dispatch(deviceList);
  };
  
 
}

export const setSelectedDevice = (value) => {
    return ({ type: SET_SELECTED_DEVICE, payload: value });
};

export const setGazedDevice = (value) => {
  return ({ type: SET_GAZED_DEVICE, payload: value });
};