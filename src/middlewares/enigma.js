import enigma from '../../enigma';
import { ENCRYPT, SET_CIPHER_LETTER } from '../constants';

const enigmaMiddleware = store => next => action => {
    if ( action.type === ENCRYPT ) {
        const { scrambler } = store.getState();
        return next({ type: SET_CIPHER_LETTER, payload: enigma(action.payload, scrambler) });
    }
    return next(action);
}

export default enigmaMiddleware;
