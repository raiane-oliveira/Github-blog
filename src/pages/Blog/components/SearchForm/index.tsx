import { useSubmit } from 'react-router-dom'
import {
  SearchFormContainer,
  TitleSearchForm,
  TitleSearchFormContainer,
  FormContainer,
} from './styles'
import { useBlogContext } from '../../../../contexts/BlogContext'

export function SearchForm() {
  const { searchIssuesRepo, issues } = useBlogContext()
  const submit = useSubmit()

  function handleSearchPostsBlog(e: any) {
    submit(e.target.firstElementChild.form)
    searchIssuesRepo(e.target.firstElementChild.value)
  }

  return (
    <SearchFormContainer>
      <TitleSearchFormContainer>
        <TitleSearchForm>Publicações</TitleSearchForm>
        <span>
          {issues.length} {issues.length === 1 ? 'publicação' : 'publicações'}
        </span>
      </TitleSearchFormContainer>

      <FormContainer action="/" onSubmit={handleSearchPostsBlog}>
        <input type="text" placeholder="Buscar conteúdo" name="q" />
      </FormContainer>
    </SearchFormContainer>
  )
}
