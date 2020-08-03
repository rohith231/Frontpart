import * as types from '../actions/types';

const initial = {
    flights: {},
    label: ""

}

 const flight = (state = initial, action) => {
    switch (action.type) {
        case types.ON_RESULT:
            return {
                flights: action.payload
            }
        case types.ON_INIT:
            return initial;
        default:
            return state;
    }
} 
export default flight;
