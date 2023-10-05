import Form from 'react-bootstrap/Form'
import { LANGUAGES_SUPPORTED } from '../constant'
import type { FromLanguage, Language } from '../types'
import { TypeSelect } from '../types.d'

type Props =
  | { type: TypeSelect.From, value: FromLanguage, onChange: (language: Language) => void }
  | { type: TypeSelect.To, value: Language, onChange: (language: Language) => void }

export function LanguageSelector({ type, value, onChange }: Props) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    onChange(event.target.value as Language)
  }
  return (
    <Form.Select aria-label="Choose a language" onChange={handleChange} value={value}>
      {type === TypeSelect.From && <option key="auto" value="auto">Detect language</option>}
      {Object.entries(LANGUAGES_SUPPORTED).map(([key, literal]) => {
        return (
            <option key={key} value={key}>{literal}</option>
        )
      })}
    </Form.Select>
  )
}
