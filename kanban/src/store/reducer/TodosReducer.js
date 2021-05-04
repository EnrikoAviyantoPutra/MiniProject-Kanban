const initialState = {
  todos: [],
  loading: false,
  error: null
}

function reducer (state= initialState, action) {
  const {type, payload} = action
  switch (type) {
    case 'GET/TODOS':
      return {...state, todos:payload}
    case 'ADD/TODOS':
      return {}
    default:
      return state
  }
}

export default reducer