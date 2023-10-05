import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useLang } from './hooks/useLang'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constant'
import { InterchangeIcon } from './components/icons'
import { LanguageSelector } from './components/LanguageSelector'
import { TypeSelect as TypeSelectToUse } from './types.d'
import { LanguageArea } from './components/LanguageArea'

function App() {
  const {
    fromLanguage,
    toLanguage,
    userField,
    resultField,
    isTraducing,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setUserField,
    setResultField
  } = useLang()
  return (
    <Container fluid>
      <h1>Google Translate Clone</h1>
      <Row>
        <Col>
          <LanguageSelector
          type={TypeSelectToUse.From}
          value={fromLanguage}
          onChange={setFromLanguage}></LanguageSelector>
          {fromLanguage}
          <LanguageArea
          type={TypeSelectToUse.From}
          value={userField}
          onChange={setUserField}
          ></LanguageArea>
        </Col>

        <Col xs="auto">
          <Button variant="link" disabled={fromLanguage === AUTO_LANGUAGE} onClick={() => {
            interchangeLanguages()
          }}>
            <InterchangeIcon />
          </Button>
        </Col>

        <Col>
          <LanguageSelector
          type={TypeSelectToUse.To}
          value={toLanguage}
          onChange={setToLanguage}></LanguageSelector>
          {toLanguage}
          <LanguageArea
          type={TypeSelectToUse.To}
          value={resultField}
          onChange={setResultField}
          isLoading={isTraducing}
          ></LanguageArea>
        </Col>
      </Row>
      <Row>
      </Row>
    </Container>
  )
}

export default App
