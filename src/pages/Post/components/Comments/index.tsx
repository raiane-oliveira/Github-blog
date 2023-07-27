import { useLoaderData } from 'react-router-dom'
import { LoaderDataProps } from '../..'
import { MarkdownConverter } from '../../../../components/MarkdownConverter'

import {
  AuthorContainer,
  CommentContent,
  CommentsContainer,
  NoCommentsAlert,
  TitleCommentsContainer,
} from './styles'
import { formatDate } from '../../../../utils/formatter'

export function Comments() {
  const { comments } = useLoaderData() as LoaderDataProps

  return (
    <CommentsContainer>
      <TitleCommentsContainer>Comentários</TitleCommentsContainer>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentContent key={comment.id}>
            <AuthorContainer>
              <img src={comment.user.avatar_url} alt="" />
              <a href={comment.user.html_url}>{comment.user.login}</a>
              <span>{formatDate(comment.created_at)}</span>
            </AuthorContainer>

            <MarkdownConverter>{comment.body}</MarkdownConverter>
          </CommentContent>
        ))
      ) : (
        <NoCommentsAlert>Essa publicação não tem comentários.</NoCommentsAlert>
      )}
    </CommentsContainer>
  )
}
