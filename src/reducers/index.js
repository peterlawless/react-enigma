import {combineReducers} from 'redux';
import scrambler from './scrambler_reducer';
import lampboard from './lampboard_reducer';

export default combineReducers({
    scrambler,
    lampboard
});

// eventually there will also be a reducer for the scrambleboard