import {
  SearchFormContainer,
  TitleSearchForm,
  TitleSearchFormContainer,
  FormContainer,
} from './styles'
import { useBlogContext } from '../../../../contexts/BlogContext'

export function SearchForm() {
  const { searchIssuesRepo, issues } = useBlogContext()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSearchPostsBlog(e: any) {
    e.preventDefault()
    searchIssuesRepo(e.target.firstElementChild.value.trim())
  }

  return (
    <SearchFormContainer>
      <TitleSearchFormContainer>
        <TitleSearchForm>Publicações</TitleSearchForm>
        <span>
          {issues.length} {issues.length === 1 ? 'publicação' : 'publicações'}
        </span>
      </TitleSearchFormContainer>

      <FormContainer role="search" onSubmit={handleSearchPostsBlog}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          name="q"
          aria-label="Buscar conteúdo"
        />
      </FormContainer>
    </SearchFormContainer>
  )
}
