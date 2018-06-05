import {combineReducers} from 'redux';
import scrambler from './scrambler_reducer';

export default combineReducers({
    scrambler
});

// eventually there will also be a reducer for the scrambleboard