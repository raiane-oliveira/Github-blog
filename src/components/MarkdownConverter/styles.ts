import { styled } from 'styled-components'

export const MarkdownConverterContainer = styled.div`
  code {
    display: block;
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    padding: 1rem 0.5rem;

    &::-webkit-scrollbar {
      height: 6px;
      background: ${(props) => props.theme['base-label']};
      border-radius: 999px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 999px;
      background: ${(props) => props.theme['base-border']};
      touch-action: pan-x;
    }
  }
`
