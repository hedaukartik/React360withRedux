import { FETCH_DEVICES, FETCH_DEVICES_REJECTED, FETCH_DEVICES_FULFILLED, SET_SELECTED_DEVICE, SET_GAZED_DEVICE, SET_SELECTED_DEVICE_COLOR } from './Types';
//import { POLY_PATH, API_KEY } from '../consts/PolyApi';

export const devicesFetch = () => {
  var deviceList = {
    type: FETCH_DEVICES_FULFILLED,
    payload: {
        devices: [
            {
              name: "Iphone XR",
              description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum",
              gazed: false,
              selected: false,
              colors:[
                {
                    color: "BLACK",
                    gazed: false
                },
                {
                    color: "BLUE",
                    gazed: false
                }
            
            ],
              sizes: ["64GB from $108","128GB from $148","256GB from $348"]
            },
            {
              name: "Samsung Galaxy S8",
              description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum",
              gazed: false,
              selected: false,
              colors:[
                {
                    color: "BLACK",
                    gazed: false
                },
                {
                    color: "WHITE",
                    gazed: false
                },
                {
                    color: "BLUE",
                    gazed: false
                },
            
            ],
              sizes: ["64GB from $108","128GB from $148","256GB from $348"]
            },
            {
              name: "Iphone 6s",
              description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum",
              gazed: false,
              selected: false,
              colors: [
                {
                    color: "BLACK",
                    gazed: false
                },
                {
                    color: "WHITE",
                    gazed: false
                },
                {
                    color: "BLUE",
                    gazed: false
                },
            
            ],
              sizes: ["64GB from $108"]
            },
            {
              name: "Note 7",
              description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum",
              gazed: false,
              selected: false,
              colors: [
                {
                    color: "BLACK",
                    gazed: false
                },
                {
                    color: "YELLOW",
                    gazed: false
                },
                {
                    color: "RED",
                    gazed: false
                },
            
            ],
              sizes: ["64GB from $108","128GB from $148"]
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
