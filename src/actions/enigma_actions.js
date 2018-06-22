import { ENIGMA_BUTTON_DEPRESS, ENIGMA_BUTTON_RELEASE } from '../constants';

export function enigmaButtonDepress(letter) {
    return {
        type: ENIGMA_BUTTON_DEPRESS,
        payload: letter
    };
}

export function enigmaButtonRelease() {
    return {
        type: ENIGMA_BUTTON_RELEASE
    };
}
