import { createContext } from 'react'

type initialStateType = {}

type MultiStepProviderType = { children: React.ReactNode }

const initialState: initialStateType = {}

const MultiStepContext = createContext(initialState)

export const MultiStepProvider = ({ children }: MultiStepProviderType) => {
	return <MultiStepContext.Provider value={}>{children}</MultiStepContext.Provider>
}

export default MultiStepContext
