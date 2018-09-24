import { ADD_CABLE, REMOVE_CABLE } from '../constants';

export function addCable(letters) {
    return {
        type: ADD_CABLE,
        payload: { [letters[0]]: letters[1] }
    }
}

export function removeCable(letter) {
    return {
        type: REMOVE_CABLE,
        payload: letter
    }
}