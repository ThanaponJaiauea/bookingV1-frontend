/** @format */

// auth-api.js

import axios from "../config/axios"

export const login = (input) => axios.post("/auth/login", input)
