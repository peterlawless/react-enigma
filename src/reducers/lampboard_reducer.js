import { SET_CIPHER_LETTER, ENIGMA_BUTTON_RELEASE, ENIGMA_BUTTON_DEPRESS } from '../constants';

const initialState = { plainLetter: '', cipherLetter: '' };

export default function lampboardReducer(state = initialState, action) {
    switch (action.type) {
        case ENIGMA_BUTTON_DEPRESS:
            return { ...state, plainLetter: action.payload }
        case SET_CIPHER_LETTER:
            return { ...state, cipherLetter: action.payload };
        case ENIGMA_BUTTON_RELEASE:
            return initialState;
    }
    return state;
}