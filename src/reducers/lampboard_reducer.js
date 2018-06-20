import { SET_CIPHER_LETTER, ENIGMA_ADVANCE, ENIGMA_BUTTON_RELEASE } from '../constants';

const initialState = { plainLetter: '', cipherLetter: '' };

export default function lampboardReducer(state = null, action) {
    switch (action.type) {
        case ENIGMA_ADVANCE:
            return { ...state, plainLetter: action.payload }
        case SET_CIPHER_LETTER:
            return { ...state, cipherLetter: action.payload };
        case ENIGMA_BUTTON_RELEASE:
            return initialState;
    }
    return state;
}