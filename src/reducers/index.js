import {combineReducers} from 'redux';
import scrambler from './scrambler_reducer';
import lampboard from './lampboard_reducer';
import plugboard from './plugboard_reducer';

export default combineReducers({
    scrambler,
    lampboard,
    plugboard
});

// eventually there will also be a reducer for the plugboard