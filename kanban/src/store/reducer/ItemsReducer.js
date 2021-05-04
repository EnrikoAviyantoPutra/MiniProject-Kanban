const initialState = {
  item : [],
  loading: false,
  error: null
}

function reducer (state= initialState, action) {
  const {type, payload} = action
  switch (type) {
    case 'GET/ITEM':
      return {...state, item:payload}
    case 'ADD/ITEM':
      return {...state, item: [...state.item, payload]}
    case 'UPDATE/ITEM':
      return {}
    case 'DELETE/ITEM':
      return {...state}
    default:
      return state
  }
}

export default reducer
