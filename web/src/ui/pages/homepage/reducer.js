import TYPES from './types'

export const initialState = { }
const handlers = { }

export default function(state = initialState, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'homepage',
  select(state) {
    return state.homepage
  }
}
