function setUser(payload) {
  return ({ type: 'USERS/SUCCESS_LOGIN', payload })
}

function setErrorUser(payload) {
  return ({ type: 'USERS/SET_ERROR', payload })
}

function setLoadingUser(payload) {
  return {
    type: 'USERS/SET_LOADING',
    payload: payload
  }
}


export function getTodos() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://todos-project-api.herokuapp.com/todos', {
        headers: {
          'Content-Type': 'application/json',
          Token: localStorage.getItem('access_token')
        }
      })

      const data = await response.json()

      console.log(data, '>>>>>>>>')
    } catch (error) {
      console.log(error)

    }
  }
}


export function registerUser(payload) {
  return async (dispatch) => {
    try {
      console.log(payload, 'Register Data New User')
      const response = await fetch('https://todos-project-api.herokuapp.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      console.log(data, '>>>>>>')
      if (data.message === "Account created successfully") {
        dispatch(setLoadingUser(false))
        return data
      } else {
        console.log(data.message, 'ini di else');
        throw data.message
      }
    } catch (error) {
      console.log(error)
      dispatch(setErrorUser(error))
      return error
    }
  }
}

export function loginUser(payload) {
  return async (dispatch) => {
    try {
      console.log(payload, '<<<<<<<<<<<<<<<')
      const response = await fetch('https://todos-project-api.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      console.log(data, '>>>>>>>>>>>>>>')
      if (data.auth_token) {
        localStorage.setItem('access_token', data.auth_token)
        dispatch(setUser(data))
        // dispatch(setErrorUser(null))
        return data
      } else if (data.message) {
        dispatch(setErrorUser(data.message))
        return data

      }

    } catch (error) {
      console.log(error);
    }
  }
}