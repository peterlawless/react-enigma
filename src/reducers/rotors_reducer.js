import { alphabetBiMap, RotorTurnoverLetters } from '../../enigma/constants';
import { alphabetLoopIncrement, alphabetLoopDecrement } from '../../enigma/utils';
import { RotorActionTypes, RotorTypes } from '../constants';

const initialState = {
    [RotorTypes.GREEK_WHEEL]: {
        model: 'beta',
        exposedLetter: 'A'
    },
    [RotorTypes.SLOW_ROTOR]: {
        model: 'I',
        exposedLetter: 'A'
    },
    [RotorTypes.CENTER_ROTOR]: {
        model: 'II',
        exposedLetter: 'A'
    },
    [RotorTypes.FAST_ROTOR]: {
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
