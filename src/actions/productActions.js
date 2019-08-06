import { ADD_PRODUCT, ADD_TO_CARD } from '../constants'

/*
 * action creators
 */

export function addProduct(payload) {
    return { type: ADD_PRODUCT, payload }
}

export function addToCard(payload) {
    return { type: ADD_TO_CARD, payload }
}
