import { createContext, useState } from 'react'

type initialStateType = {
	test: string
}

type MultiStepProviderType = { children: React.ReactNode }

const initialState: initialStateType = {
	test: '',
}

const MultiStepContext = createContext(initialState)

export const MultiStepProvider = ({ children }: MultiStepProviderType) => {
	const [test, setTest] = useState<string>('')

	console.log(test)

	return <MultiStepContext.Provider value={{ test }}>{children}</MultiStepContext.Provider>
}

export default MultiStepContext
