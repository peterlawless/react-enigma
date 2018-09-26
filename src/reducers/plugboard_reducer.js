import { ADD_CABLE, REMOVE_CABLE } from '../constants';

export default function plugboardReducer( state = {}, action) {
    switch (action.type) {
        case ADD_CABLE:
            return { ...state, ...action.payload };
        case REMOVE_CABLE:
            // value is an unused placeholder for the sake of valid syntax
            const { [action.payload]: value, ...remainingState } = state;
            console.log(value, remainingState);
            return remainingState;
    }
    return state;
}
