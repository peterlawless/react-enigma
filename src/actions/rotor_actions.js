import { RotorActionTypes, RotorTypes } from '../constants';

export function advanceRotor(rotorType) {
    return {
        type: RotorActionTypes.ADVANCE,
        payload: { rotorType }
    };
}

export function setModel(rotorType, rotorModel) {
    return {
        type: RotorActionTypes.SET_MODEL,
        payload: { rotorType, rotorModel }
    };
}
