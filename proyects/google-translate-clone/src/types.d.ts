import type { AUTO_LANGUAGE, LANGUAGES_SUPPORTED } from './constant'

export type Language = keyof typeof LANGUAGES_SUPPORTED
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface State {
  fromLanguage: FromLanguage
  toLanguage: Language
  userField: string
  resultField: string
  isTraducing: boolean
}
export type Action =
    | { type: 'INTERCHANGE_LANGUAGES' }
    | { type: 'SET_USER_FIELD', payload: string }
    | { type: 'SET_RESULT_FIELD', payload: string }
    | { type: 'SET_TO_LANGUAGE', payload: Language }
    | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }

export enum TypeSelect {
  From = 'from',
  To = 'to'
}
