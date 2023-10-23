import { UseState, UserAction, UserActionTypes } from './../../types/user';

const initialState: UseState = {
  users: [],
  loading: false,
  error: null
}

export const useReducer = (state = initialState, action: UserAction): UseState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { ...state, loading: true, error: null, users: [] }
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, error: null, users: action.payload }
    case UserActionTypes.FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload, users: [] }
    default:
      return state;
  }
}
