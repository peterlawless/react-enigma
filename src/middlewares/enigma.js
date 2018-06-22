import enigma from '../../enigma';
import { ENCRYPT, SET_CIPHER_LETTER, ENIGMA_ADVANCE_SUCCESS } from '../constants';
import LampBoard from '../containers/LampBoard';

const enigmaMiddleware = store => next => action => {
    const { scrambler, lampboard } = store.getState();
    console.log(lampboard);    
    if ( action.type === ENIGMA_ADVANCE_SUCCESS && !!lampboard.plainLetter ) {
        return next({ type: SET_CIPHER_LETTER, payload: enigma(lampboard.plainLetter, scrambler) });
    }
    return next(action);
}

export default enigmaMiddleware;
