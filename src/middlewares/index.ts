import type { Middleware } from 'redux'
import type { PokemonsState } from '../types/PokemonsState'

export const logger: Middleware<{}, PokemonsState> = store => next => action => {
    console.log('Action:', action);
    return next(action);
}