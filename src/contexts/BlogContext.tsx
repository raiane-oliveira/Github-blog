import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react'

import { issuesApi, searchApi, userApi } from '../lib/axios'
import { repoURL } from '../utils/repoURL'

import { Issue, UserGithub, blogReducer } from '../reducers/blog/reducer'
import {
  fetchGithubUserAction,
  fetchIssuesRepoAction,
  searchIssuesRepoAction,
} from '../reducers/blog/actions'

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
  const [blog, dispatch] = useReducer(blogReducer, {
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
    dispatch(fetchGithubUserAction(response.data))
  }

  async function fetchIssuesRepo() {
    const response = await issuesApi.get(`${repoURL}/issues`, {
      params: {
        sort: 'created',
      },
    })

    dispatch(fetchIssuesRepoAction(response.data))
  }

  const searchIssuesRepo = useCallback(async (query: string) => {
    const response = await searchApi.get(
      `/issues?q=${query}%20repo:${repoURL}%20state:open`,
      {
        params: {
          sort: 'created',
        },
      },
    )

    dispatch(searchIssuesRepoAction(response.data.items))
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
