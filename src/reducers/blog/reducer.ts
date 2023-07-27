import { produce } from 'immer'
import { BlogActionsType } from './actions'

export interface UserGithub {
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
  user: { login: string }
  html_url: string
  comments_url: string
  avatar_url: string
}

export interface BlogType {
  user: UserGithub
  issues: Issue[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function blogReducer(state: BlogType, action: any) {
  switch (action.type) {
    case BlogActionsType.FETCH_GITHUB_USER: {
      return produce(state, (draft) => {
        draft.user = action.payload.user
      })
    }
    case BlogActionsType.FETCH_ISSUES_REPO: {
      return produce(state, (draft) => {
        draft.issues = action.payload.issues
      })
    }
    case BlogActionsType.SEARCH_ISSUES_REPO: {
      return produce(state, (draft) => {
        draft.issues = action.payload.issues
      })
    }
    default:
      return state
  }
}
