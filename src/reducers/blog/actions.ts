import { Issue, UserGithub } from './reducer'

export enum BlogActionsType {
  FETCH_ISSUES_REPO = 'FETCH_ISSUES_REPO',
  FETCH_GITHUB_USER = 'FETCH_GITHUB_USER',
  SEARCH_ISSUES_REPO = 'SEARCH_ISSUES_REPO',
}

export function fetchIssuesRepoAction(issues: Issue[]) {
  return {
    type: BlogActionsType.FETCH_ISSUES_REPO,
    payload: {
      issues,
    },
  }
}

export function fetchGithubUserAction(user: UserGithub) {
  return {
    type: BlogActionsType.FETCH_GITHUB_USER,
    payload: {
      user,
    },
  }
}

export function searchIssuesRepoAction(issues: Issue[]) {
  return {
    type: BlogActionsType.SEARCH_ISSUES_REPO,
    payload: {
      issues,
    },
  }
}
