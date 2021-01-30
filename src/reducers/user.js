import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: {
    accessToken: localStorage.accessToken || null,
    userId: localStorage.userId || 0,
    statusMessage: '',
    errorMessage: null
  }
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload
      state.login.accessToken = accessToken
      localStorage.setItem('accessToken', accessToken)
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      state.login.userId = userId
      localStorage.setItem('userId', userId)
    },
    setStatusMessage: (state, action) => {
      const { statusMessage } = action.payload
      state.login.statusMessage = statusMessage
    },
    setErrorMessage: (state, action) => {
      state.login.userId = 0
      state.login.accessToken = null
      state.login.secretMessage = null
    },
    setNewProject: (state, action) => {
      const { projectname } = action.payload
      state.login.projectname = projectname
    },
    logout: () => {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('name')
      localStorage.removeItem('userId')
      return initialState
    }
  }

})