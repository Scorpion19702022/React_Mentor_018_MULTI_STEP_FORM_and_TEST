import { createContext, useState } from 'react'

type initialStateType = {
	step: number
	handleNextStep: () => void
}

type MultiStepProviderType = { children: React.ReactNode }

const initialState: initialStateType = {
	step: 1,
	handleNextStep: () => {},
}

const MultiStepContext = createContext(initialState)

export const MultiStepProvider = ({ children }: MultiStepProviderType) => {
	const [step, setStep] = useState<number>(1)

	const handleNextStep = () => {
		setStep(step + 1)
	}

	return <MultiStepContext.Provider value={{ step, handleNextStep }}>{children}</MultiStepContext.Provider>
}

export default MultiStepContext
