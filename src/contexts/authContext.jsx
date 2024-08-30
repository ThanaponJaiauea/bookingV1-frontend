/** @format */

/** @format */

import {createContext, useState} from "react"
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage"

import {login} from "../api/auth-api"
import {jwtDecode} from "jwt-decode"

export const AuthContext = createContext()

export default function AuthContextProvider({children}) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  )

  const logIn = async (email, password) => {
    const res = await login({email, password})
    setAccessToken(res.data.accessToken)
    setAuthenticatedUser(jwtDecode(res.data.accessToken))
  }

  const logout = async () => {
    removeAccessToken()
    setAuthenticatedUser(null)
  }

  return (
    <AuthContext.Provider value={{authenticatedUser, logout, logIn}}>
      {children}
    </AuthContext.Provider>
  )
}
