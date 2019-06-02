import { FETCH_PLANS, FETCH_PLANS_REJECTED, FETCH_PLANS_FULFILLED } from './Types';
//import { POLY_PATH, API_KEY } from '../consts/PolyApi';

export const plansFetch = () => {
    return {
        type: "FETCH_PLANS_FULFILLED",
        payload: {
            plans: [
                {
                  name: "Combo 1",
                  decrptipn: " (100MB Local Data, 100 mins of Outgoing Calls)",
                  gazed: false,
                  selected: false
                },
                {
                  name: "Combo 2",
                  decrptipn:
                    " (2GB Local Data, 200 mins of Outgoing Calls, Free Incoming Calls, 1000 Local SMS/MMS, Singtel WiFi)",
                  gazed: false,
                  selected: false
                },
                {
                  name: "Combo 3",
                  decrptipn:
                    " (3GB Local Data, Free Incoming Calls, Unlimited* Outgoing Calls)",
                  gazed: false,
                  selected: false
                },
                {
                  name: "Combo 6",
                  decrptipn:
                    " (6GB Local Data, Free Incoming Calls, Unlimited* mins of Outgoing Calls)",
                  gazed: false,
                  selected: false
                }
              ]
        }
    }
}

// export const setCurrent = (value) => {
//     return ({ type: SET_CURRENT_POST, payload: value });
// };