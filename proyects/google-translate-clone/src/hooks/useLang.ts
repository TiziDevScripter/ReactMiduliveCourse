import { AUTO_LANGUAGE } from '../constant'
import type { State, Action, FromLanguage, Language } from '../types'
import { useReducer } from 'react'

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  userField: '',
  resultField: '',
  isTraducing: false
}

function reducer(state: State, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    // Evitar que el valor 'auto' de fromLanguage vaya al toLanguage
    if (state.fromLanguage === AUTO_LANGUAGE) return state

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === 'SET_USER_FIELD') {
    return {
      ...state,
      userField: action.payload,
      isTraducing: true
    }
  }

  if (type === 'SET_RESULT_FIELD') {
    return {
      ...state,
      resultField: action.payload,
      isTraducing: false
    }
  }

  return state
}

export function useLang() {
  const [{
    fromLanguage,
    toLanguage,
    userField,
    resultField,
    isTraducing
  }, dispatch] = useReducer(reducer, initialState)
  function interchangeLanguages() {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }
  function setFromLanguage(payload: FromLanguage) {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }
  function setToLanguage(payload: Language) {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }
  function setUserField(payload: string) {
    dispatch({ type: 'SET_USER_FIELD', payload })
  }
  function setResultField(payload: string) {
    dispatch({ type: 'SET_RESULT_FIELD', payload })
  }
  return {
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
  }
}
