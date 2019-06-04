import { FETCH_PLANS, FETCH_PLANS_REJECTED, FETCH_PLANS_FULFILLED, SET_SELECTED_PLAN, SET_GAZED_PLAN } from './Types';
//import { POLY_PATH, API_KEY } from '../consts/PolyApi';

export const plansFetch = () => {
  var planList = {
    type: FETCH_PLANS_FULFILLED,
    payload: {
        plans: [
            {
              name: "Combo 1",
              description: " (100MB Local Data, 100 mins of Outgoing Calls)",
              gazed: false,
              selected: false
            },
            {
              name: "Combo 2",
              description:
                " (2GB Local Data, 200 mins of Outgoing Calls, Free Incoming Calls, 1000 Local SMS/MMS, Singtel WiFi)",
              gazed: false,
              selected: false
            },
            {
              name: "Combo 3",
              description:
                " (3GB Local Data, Free Incoming Calls, Unlimited* Outgoing Calls)",
              gazed: false,
              selected: false
            },
            {
              name: "Combo 6",
              description:
                " (6GB Local Data, Free Incoming Calls, Unlimited* mins of Outgoing Calls)",
              gazed: false,
              selected: false
            }
          ]
    }
}

  return (dispatch) => {

    dispatch(planList);
  };
  
 
}

export const setSelectedPlan = (value) => {
    return ({ type: SET_SELECTED_PLAN, payload: value });
};

export const setGazedPlan = (value) => {
  return ({ type: SET_GAZED_PLAN, payload: value });
};