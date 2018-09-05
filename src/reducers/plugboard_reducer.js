import { ADD_CABLE, REMOVE_CABLE } from '../constants';

export default function plugboardReducer( state = {}, action) {
    switch (action.type) {
        case ADD_CABLE:
            return { ...state, ...action.payload };
    }
    return state;
}
