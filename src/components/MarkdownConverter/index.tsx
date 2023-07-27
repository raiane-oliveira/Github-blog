import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { MarkdownConverterContainer } from './styles'

interface MarkdownConverterProps {
  children: string
}

export function MarkdownConverter({ children }: MarkdownConverterProps) {
  return (
    <MarkdownConverterContainer>
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
        {children}
      </ReactMarkdown>
    </MarkdownConverterContainer>
  )
}
