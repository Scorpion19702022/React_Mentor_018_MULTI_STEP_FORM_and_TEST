import { createContext, useState } from 'react'

type initialStateType = {
	step: number
}

type MultiStepProviderType = { children: React.ReactNode }

const initialState: initialStateType = {
	step: 0,
}

const MultiStepContext = createContext(initialState)

export const MultiStepProvider = ({ children }: MultiStepProviderType) => {
	const [step, setStep] = useState<number>(1)

	return <MultiStepContext.Provider value={{ step }}>{children}</MultiStepContext.Provider>
}

export default MultiStepContext
