import { combineReducers } from 'redux'

import user from '../process/users/reducer'
import homepage from '../ui/pages/homepage/reducer'
import TYPES from './types'

const appReducer = combineReducers({
  user,
  homepage
})

export default (state, action) => {
  if (action.type === TYPES.RESET_ALL_USER_DATA_SUCCESS) {
    state = undefined
  }

  return appReducer(state, action)
}
