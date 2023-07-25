import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { userApi } from '../lib/axios'

interface UserGithub {
  name: string
  avatar_url: string
  html_url: string
  bio: string
  login: string
  company: string | null
  followers: number
}

interface BlogContextType {
  user: UserGithub
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [user, setUser] = useState({} as UserGithub)

  async function fetchUserGithub(username: string) {
    const response = await userApi.get(`/${username}`)
    setUser(response.data)
  }

  useEffect(() => {
    fetchUserGithub('raiane-oliveira')
  }, [])

  return (
    <BlogContext.Provider value={{ user }}>{children}</BlogContext.Provider>
  )
}

export const useBlogContext = () => useContext(BlogContext)
