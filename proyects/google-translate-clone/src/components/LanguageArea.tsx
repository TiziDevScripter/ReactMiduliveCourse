import { Form } from 'react-bootstrap'
import { type TypeSelect, TypeSelect as TypeSelectToUse } from '../types.d'

type Props =
  | { type: TypeSelect.From, isLoading?: boolean, value: string, onChange: (text: string) => void }
  | { type: TypeSelect.To, isLoading: boolean, value: string, onChange: (text: string) => void }

const defaultStyles = { height: '150px', resize: 'none', border: 'none' }
export function LanguageArea({ isLoading, type, value, onChange }: Props) {
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value)
  }

  function getTextHolder() {
    if (type === TypeSelectToUse.From) return 'Enter text'
    if (isLoading) return 'Loading'
    return 'Result'
  }

  const styles = type === TypeSelectToUse.From
    ? defaultStyles
    : { ...defaultStyles, backgroundColor: '#f5f5f5' }

  return (
    <Form.Control
      as="textarea"
      placeholder={getTextHolder()}
      style={styles}
      onChange={() => handleChange}
      disabled={type === TypeSelectToUse.To}
      autoFocus={type === TypeSelectToUse.From}
    ></Form.Control>
  )
}
