import { alphabetBiMap, RotorTurnoverLetters } from '../../enigma/constants';
import { alphabetLoopIncrement, alphabetLoopDecrement } from '../../enigma/utils';
import {
    SET_ROTOR_MODEL,
    ROTOR_ADVANCE,
    ROTOR_REVERSE,
    SET_REFLECTOR_MODEL,
    ENIGMA_ADVANCE,
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
function isOnTurnoverLetter(rotor) {
    return !!RotorTurnoverLetters[rotor.model][rotor.exposedLetter]
}

export default function rotorsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ROTOR_MODEL:
            return {
                ...state,
                [action.payload.rotorType]: {
                    ...state[action.payload.rotorType],
                    model: action.payload.model
                }
            };
        case SET_REFLECTOR_MODEL:
            return {
                ...state,
                [REFLECTOR]: action.payload
            };
        case ROTOR_ADVANCE:
            return {
                ...state,
                [action.payload]: {
                    ...state[action.payload],
                    exposedLetter: alphabetLoopIncrement(state[action.payload].exposedLetter)
                }
            };
        case ROTOR_REVERSE:
            return {
                ...state,
                [action.payload]: {
                    ...state[action.payload],
                    exposedLetter: alphabetLoopDecrement(state[action.payload].exposedLetter)
                }
            };
        case ENIGMA_ADVANCE:
            return {
                ...state,
                [FAST_ROTOR]: {
                    ...state[FAST_ROTOR],
                    exposedLetter: alphabetLoopIncrement(state[FAST_ROTOR].exposedLetter)
                },
                [CENTER_ROTOR]: {
                    ...state[CENTER_ROTOR],
                    exposedLetter: isOnTurnoverLetter(state[FAST_ROTOR]) ?
                                       alphabetLoopIncrement(state[CENTER_ROTOR].exposedLetter) :
                                       state[CENTER_ROTOR].exposedLetter    
                },
                [SLOW_ROTOR]: {
                    ...state[SLOW_ROTOR],
                    exposedLetter: (isOnTurnoverLetter(state[FAST_ROTOR]) && isOnTurnoverLetter(state[CENTER_ROTOR])) ?
                                       alphabetLoopIncrement(state[SLOW_ROTOR].exposedLetter) :
                                       state[SLOW_ROTOR].exposedLetter
                }
            }
    }   
    return state;
}
