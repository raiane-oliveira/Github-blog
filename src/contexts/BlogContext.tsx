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
      login: '',
      company: null,
      followers: 0,
    },
    issues: [],
  })
  const { user, issues } = blog

  async function fetchUserGithub(username: string) {
    const response = await userApi.get(`/${username}`)
    const userGihub: UserGithub = {
      name: response.data.name,
      avatar_url: response.data.avatar_url,
      company: response.data.company,
      followers: response.data.followers,
      html_url: response.data.html_url,
      login: response.data.login,
    }
    dispatch(fetchGithubUserAction(userGihub))
  }

  async function fetchIssuesRepo() {
    const response = await issuesApi.get(`${repoURL}/issues`, {
      params: {
        sort: 'created',
      },
    })

    const issues = response.data.map((issue: Issue) => {
      return {
        id: issue.id,
        title: issue.title,
        body: issue.body,
        created_at: issue.created_at,
        number: issue.number,
        comments: issue.comments,
        user: { login: issue.user.login },
        html_url: issue.html_url,
        comments_url: issue.comments_url,
      }
    })

    dispatch(fetchIssuesRepoAction(issues))
  }

  const searchIssuesRepo = useCallback(async (query: string) => {
    const response = await searchApi.get(`/issues`, {
      params: {
        q: `${query} repo:${repoURL} state:open`,
        sort: 'created',
      },
    })

    const issues = response.data.items.map((issue: Issue) => {
      return {
        id: issue.id,
        title: issue.title,
        body: issue.body,
        created_at: issue.created_at,
        number: issue.number,
        comments: issue.comments,
        user: { login: issue.user.login },
        html_url: issue.html_url,
        comments_url: issue.comments_url,
      }
    })

    dispatch(searchIssuesRepoAction(issues))
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
