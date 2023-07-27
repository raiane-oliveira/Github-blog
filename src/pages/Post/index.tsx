import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { Issue, useBlogContext } from '../../contexts/BlogContext'
import { formatDate } from '../../utils/formatter'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

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

interface LoaderDataProps {
  post: Issue
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const numberIssue = Number(url.pathname.split('/').pop())
  const response = await issuesApi.get(
    `rocketseat-education/reactjs-github-blog-challenge/issues/${numberIssue}`,
  )

  const post = response.data
  return { post }
}

export function Post() {
  const { user } = useBlogContext()
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
            <span>{user.login}</span>
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
        <ReactMarkdown
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  wrapLongLines={true}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            },
          }}
        >
          {post.body}
        </ReactMarkdown>
      </ContentPost>
    </PostContainer>
  )
}
