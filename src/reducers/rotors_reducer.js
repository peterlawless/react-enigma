import { alphabetBiMap, RotorTurnoverLetters } from '../../enigma/constants';
import { alphabetLoopIncrement, alphabetLoopDecrement } from '../../enigma/utils';
import {
    RotorActionTypes,
    GREEK_WHEEL,
    SLOW_ROTOR,
    CENTER_ROTOR,
    FAST_ROTOR
} from '../constants';

const initialState = {
    [GREEK_WHEEL]: {
        model: 'beta',
        exposedLetter: 'A'
    },
    [SLOW_ROTOR]: {
        model: 'I',
        exposedLetter: 'A'
    },
    [CENTER_ROTOR]: {
        model: 'II',
        exposedLetter: 'A'
    },
    [FAST_ROTOR]: {
        model: 'III',
        exposedLetter: 'A'
    }
};

export default function rotorsReducer(state = initialState, action) {
    switch (action.type) {
        case RotorActionTypes.SET_MODEL:
            return {
                ...state,
                [action.payload.rotorType]: {
                    ...state[action.payload.rotorType],
                    model: action.payload.model
                }
            }
    }   
    return state;
}
