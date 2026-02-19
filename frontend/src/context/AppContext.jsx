import { createContext, useContext, useEffect, useState } from "react";
import api from "../utils/axios";

export const AppContext=createContext(null)

export const useAppContext=()=>useContext(AppContext)
const ContextProvider=({children})=>{

  const [user, setUser]=useState(null)
  const [loading, setLoading]=useState(null)

  const fetchUser = async () => {
    try {
      const res = await api.get('/auth/me', { withCredentials: true })
      setUser(res.data.user)
    } catch (err) {
      if (err.response?.status !== 401) {
        console.error(err)
      }
      setUser(null)
    } finally {
      setLoading(false)
    }
  }


  useEffect(()=>{
    fetchUser()
  },[])

  const logout=async()=>{
    try{
      await api.post("/auth/logout")
    }catch (err) {
      console.error(err);
    }
    setUser(null)
  }
  return(
    <AppContext.Provider value={{user, setUser, loading, logout}}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
