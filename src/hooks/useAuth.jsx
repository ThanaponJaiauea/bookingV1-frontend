/** @format */

import {createContext, useState} from "react"
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage"

import {login} from "../api/auth-api"

export const AuthContext = createContext()

export default function AuthContextProvider({children}) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  )

  const s = async (email, password) => {
    const res = await login({email, password})
    setAccessToken(res.data.accessToken)
    setAuthenticatedUser(jwtDecode(res.data.accessToken))
  }

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}
