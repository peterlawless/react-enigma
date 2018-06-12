import { ENCRYPT } from '../constants';
import { enigmaAdvance } from './scrambler_actions';

export function enigmaEncrypt(letter) {
    return {
        type: ENCRYPT,
        payload: letter
    };
}

export function enigmaButtonDepress(letter) {
    return function(dispatch) {
        dispatch(enigmaAdvance());
        dispatch(enigmaEncrypt(letter));
    }
}