import { alphabetBiMap, RotorTurnoverLetters } from '../../enigma/constants';
import { alphabetLoopIncrement, alphabetLoopDecrement } from '../../enigma/utils';
import {
    RotorActionTypes,
    REFLECTOR,
    GREEK_WHEEL,
    SLOW_ROTOR,
    CENTER_ROTOR,
    FAST_ROTOR
} from '../constants';

const initialState = {
    [REFLECTOR]: 'b',
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

// perhaps this should be in the enigma utility functions?
function isTurnoverLetter(rotor) {
    return !!RotorTurnoverLetters[rotor.model][rotor.exposedLetter]
}

function calculateExposedLetter(currentLetter, previousRotor) {
    return isTurnoverLetter(previousRotor) ? alphabetLoopIncrement(currentLetter) : currentLetter;
}

export default function rotorsReducer(state = initialState, action) {
    switch (action.type) {
        case RotorActionTypes.SET_ROTOR_MODEL:
            return {
                ...state,
                [action.payload.rotorType]: {
                    ...state[action.payload.rotorType],
                    model: action.payload.model
                }
            };
        case RotorActionTypes.SET_REFLECTOR_MODEL:
            return {
                ...state,
                [REFLECTOR]: action.payload
            };
        case RotorActionTypes.ADVANCE:
            return {
                ...state,
                [action.payload]: {
                    ...state[action.payload],
                    exposedLetter: alphabetLoopIncrement(state[action.payload].exposedLetter)
                }
            };
        case RotorActionTypes.REVERSE:
            return {
                ...state,
                [action.payload]: {
                    ...state[action.payload],
                    exposedLetter: alphabetLoopDecrement(state[action.payload].exposedLetter)
                }
            };
        case RotorActionTypes.ENIGMA_BUTTON_DEPRESS:
            return {
                ...state,
                [FAST_ROTOR]: {
                    ...state[FAST_ROTOR],
                    exposedLetter: alphabetLoopIncrement(state[FAST_ROTOR].exposedLetter)
                },
                [CENTER_ROTOR]: {
                    ...state[CENTER_ROTOR],
                    exposedLetter: calculateExposedLetter(state[CENTER_ROTOR].exposedLetter, state[FAST_ROTOR])
                },
                [SLOW_ROTOR]: {
                    ...state[SLOW_ROTOR],
                    exposedLetter: calculateExposedLetter(state[SLOW_ROTOR].exposedLetter, state[CENTER_ROTOR])
                }
            }
    }   
    return state;
}
