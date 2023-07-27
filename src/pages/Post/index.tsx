import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { Issue } from '../../reducers/blog/reducer'
import { formatDate } from '../../utils/formatter'

import { FaChevronLeft, FaCalendarDay, FaComment } from 'react-icons/fa'
import { RiShareBoxLine, RiGithubFill } from 'react-icons/ri'

import {
  ContentPost,
  LinksPostInfo,
  PostContainer,
  PostInfo,
  SmallInfoPost,
} from './styles'
import { issuesApi } from '../../lib/axios'
import { repoURL } from '../../utils/repoURL'
import { Comments } from './components/Comments'
import { MarkdownConverter } from '../../components/MarkdownConverter'

interface Comment {
  id: number
  html_url: string
  user: {
    login: string
    html_url: string
    avatar_url: string
  }
  created_at: string
  body: string
}

export interface LoaderDataProps {
  post: Issue
  comments: Comment[]
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const numberIssue = Number(url.pathname.split('/').pop())
  const response = await issuesApi.get(`${repoURL}/issues/${numberIssue}`)
  const comments = await issuesApi.get(response.data.comments_url)

  return { post: response.data, comments: comments.data }
}

export function Post() {
  const { post } = useLoaderData() as LoaderDataProps

  return (
    <PostContainer>
      <PostInfo>
        <LinksPostInfo>
          <Link to="/">
            <FaChevronLeft />
            <span>voltar</span>
          </Link>

          <a target="_blank" href={post.html_url} rel="noreferrer">
            <span>Ver no github</span>
            <RiShareBoxLine />
          </a>
        </LinksPostInfo>

        <h1>{post.title}</h1>

        <SmallInfoPost>
          <div>
            <RiGithubFill />
            <span>{post.user.login}</span>
          </div>

          <div>
            <FaCalendarDay />
            <span>{formatDate(post.created_at)}</span>
          </div>

          <div>
            <FaComment />
            <span>
              {post.comments}{' '}
              {post.comments === 1 ? 'comentário' : 'comentários'}
            </span>
          </div>
        </SmallInfoPost>
      </PostInfo>

      <ContentPost>
        <MarkdownConverter>{post.body}</MarkdownConverter>
      </ContentPost>

      <Comments />
    </PostContainer>
  )
}
