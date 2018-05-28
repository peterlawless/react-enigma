import { RotorActionTypes } from '../constants';

export function advanceRotor(rotorType) {
    return {
        type: RotorActionTypes.ADVANCE,
        payload: { rotorType }
    };
}

// this could be refactored, since rotorType and model are both props on the rotor
// and so we might not need to unpack them just to pack them back up again.
export function setModel(rotorType, model) {
    return {
        type: RotorActionTypes.SET_MODEL,
        payload: { rotorType, model }
    };
}
