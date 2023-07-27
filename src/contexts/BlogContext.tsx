import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { issuesApi, userApi } from '../lib/axios'
import axios from 'axios'

interface UserGithub {
  name: string
  avatar_url: string
  html_url: string
  bio: string
  login: string
  company: string | null
  followers: number
}

export interface Issue {
  id: number
  title: string
  body: string
  created_at: string
  number: number
  comments: number
  html_url: string
}

interface BlogType {
  user: UserGithub
  issues: Issue[]
}

interface BlogContextType {
  user: UserGithub
  issues: Issue[]
  searchIssuesRepo: (query: string) => void
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [blog, setBlog] = useState<BlogType>({
    user: {
      name: '',
      avatar_url: '',
      html_url: '',
      bio: '',
      login: '',
      company: null,
      followers: 0,
    },
    issues: [],
  })

  const { user, issues } = blog

  async function fetchUserGithub(username: string) {
    const response = await userApi.get(`/${username}`)
    setBlog((prevBlog) => ({ ...prevBlog, user: response.data }))
  }

  async function fetchIssuesRepo() {
    const response = await issuesApi.get(
      `rocketseat-education/reactjs-github-blog-challenge/issues`,
      {
        params: {
          sort: 'created',
        },
      },
    )

    setBlog((prevBlog) => ({ ...prevBlog, issues: response.data }))
  }

  const searchIssuesRepo = useCallback(async function searchIssuesRepo(
    query: string,
  ) {
    const response = await axios
      .get(
        `https://api.github.com/search/issues?q=${query}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
        {
          params: {
            sort: 'created',
          },
        },
      )
      .catch((err) => {
        throw new Error(`Erro: ${err}`)
      })

    setBlog((prevBlog) => ({ ...prevBlog, issues: response.data.items }))
  }, [])

  useEffect(() => {
    fetchUserGithub('raiane-oliveira')
    fetchIssuesRepo()
  }, [])

  return (
    <BlogContext.Provider value={{ user, issues, searchIssuesRepo }}>
      {children}
    </BlogContext.Provider>
  )
}

export const useBlogContext = () => useContext(BlogContext)
