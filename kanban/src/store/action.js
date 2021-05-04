function setUser(payload){
  return ({ type: 'USERS/SUCCESS_LOGIN', payload})
}

function setErrorUser(payload){
  return ({ type: 'USERS/SET_ERROR', payload})
}

function setLoadingUser(payload) {
  return {
    type: 'USERS/SET_LOADING',
    payload: payload
  }
}


export function registerUser(payload){
  return async (dispatch) => {
    try {
      console.log(payload, 'Register Data New User')
      const response = await fetch ('https://todos-project-api.herokuapp.com/signup',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      console.log(data,'>>>>>>')
      if(data.message) {
        dispatch(setLoadingUser(false))
        return data
      }
    } catch (error) {
      dispatch(setErrorUser(error))
    }
  }
}

export function loginUser(payload) {
  return async (dispatch) => {
    try {
      console.log(payload,'<<<<<<<<<<<<<<<')
      const response = await fetch ('https://todos-project-api.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      console.log(data,'>>>>>>>>>>>>>>')
      if (data.auth_token){
        localStorage.setItem('access_token', data.auth_token)
        dispatch(setUser(data))
        // dispatch(setErrorUser(null))
        return data
      }else if(data.message){
        dispatch(setErrorUser(data.message))
        return data
        
      }
      
    } catch (error) {
      console.log(error);
    }
  }
}