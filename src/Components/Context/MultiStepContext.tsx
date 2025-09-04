import { createContext, useState } from 'react'
import type { ResultTypes } from '../Types/ResultTypes'

type initialStateType = {
	step: number
	result: ResultTypes
	handleNextStep: () => void
	handleBackStep: () => void
	handleDataStepOne: (firstName: string, lastName: string) => void
	handleDataStepTwo: (age: string, gender: string) => void
	handleDataStepThree: (phoneNumber: string, city: string) => void
	handleCleanAll: () => void
	cleanAllState: boolean
}

type MultiStepProviderType = { children: React.ReactNode }

const initialState: initialStateType = {
	step: 1,
	result: {},
	handleNextStep: () => {},
	handleBackStep: () => {},
	handleDataStepOne: () => {},
	handleDataStepTwo: () => {},
	handleDataStepThree: () => {},
	handleCleanAll: () => {},
	cleanAllState: false,
}

const MultiStepContext = createContext(initialState)

export const MultiStepProvider = ({ children }: MultiStepProviderType) => {
	const [step, setStep] = useState<number>(1)
	const [result, setResult] = useState<ResultTypes>({})

	const [cleanAllState, setCleanAllState] = useState<boolean>(false)

	const handleNextStep = () => {
		setStep(prevState => ++prevState)
	}

	const handleDataStepOne = (firstName: string, lastName: string) => {
		// setCleanAllState(false)
		setResult({
			...result,
			firstNameResult: firstName,
			lastNameResult: lastName,
		})
	}

	const handleDataStepTwo = (age: string, gender: string) => {
		// setCleanAllState(false)
		setResult({
			...result,
			ageResult: age,
			genderResult: gender,
		})
	}

	const handleDataStepThree = (phoneNumber: string, city: string) => {
		// setCleanAllState(false)
		setResult({
			...result,
			phoneResult: phoneNumber,
			cityResult: city,
		})
	}

	const handleBackStep = () => {
		// setCleanAllState(false)
		setStep(prevState => --prevState)
	}

	const handleCleanAll = () => {
		setCleanAllState(true)
		setStep(1)
		setResult({
			firstNameResult: '',
			lastNameResult: '',
			ageResult: '',
			genderResult: '',
			phoneResult: '',
			cityResult: '',
		})
	}

	return (
		<MultiStepContext.Provider
			value={{
				step,
				result,
				handleNextStep,
				handleBackStep,
				handleDataStepOne,
				handleDataStepTwo,
				handleDataStepThree,
				handleCleanAll,
				cleanAllState,
			}}
		>
			{children}
		</MultiStepContext.Provider>
	)
}

export default MultiStepContext
