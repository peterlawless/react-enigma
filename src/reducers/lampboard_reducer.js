import { SET_CIPHER_LETTER, ENIGMA_BUTTON_RELEASE } from '../constants';

export default function lampboardReducer(state = null, action) {
    switch (action.type) {
        case SET_CIPHER_LETTER:
            return action.payload;
        case ENIGMA_BUTTON_RELEASE:
            return null;
    }
    return state;
}