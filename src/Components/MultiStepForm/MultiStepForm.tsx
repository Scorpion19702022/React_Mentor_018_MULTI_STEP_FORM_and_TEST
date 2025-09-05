import { useContext, useState } from 'react'
import StepOne from '../StepOne/StepOne'
import StepResult from '../StepResult/StepResult'
import StepThree from '../StepThree/StepThree'
import StepTwo from '../StepTwo/StepTwo'
import styles from './MultiStepForm.module.css'
import MultiStepContext from '../Context/MultiStepContext'
import { useForm } from 'react-hook-form'
import type { ResultTypes } from '../Types/ResultTypes'

const MultiStepForm = () => {
	const {
		step,
		result,
		handleNextStep,
		handleBackStep,
		handleDataStepOne,
		handleDataStepTwo,
		handleDataStepThree,
		handleCleanAll,
		cleanAllState,
	} = useContext(MultiStepContext)

	const [useStep, setUseStep] = useState(1)

	const methods = useForm<ResultTypes>({
		defaultValues: {
			firstNameResult: '',
			lastNameResult: '',
			ageResult: '',
			genderResult: '',
			phoneResult: '',
			cityResult: '',
		},
	})

	const handleOnSubmit = (data: ResultTypes) => {
		console.log(data)
		setUseStep(3)
	}

	return (
		<main className={styles.wrapper}>
			<div className={styles.box_heading}>
				<h2 className={step === 1 ? styles.heading_step_one_active : styles.heading_step_one}>
					{`krok pierwszy`.toLocaleUpperCase()}
				</h2>
				<h2 className={step === 2 ? styles.heading_step_two_active : styles.heading_step_two}>
					{`krok drugi`.toLocaleUpperCase()}
				</h2>
				<h2 className={step === 3 ? styles.heading_step_three_active : styles.heading_step_three}>
					{`krok trzeci`.toLocaleUpperCase()}
				</h2>
			</div>
			{/* <div className={styles.box_steps}>
				<StepOne
					stepOne={step}
					stepEndOne={handleNextStep}
					addDataStepOne={handleDataStepOne}
					isClean={cleanAllState}
					result={result}
				/>
				<StepTwo
					stepTwo={step}
					stepEndTwo={handleNextStep}
					addDateStepTwo={handleDataStepTwo}
					backStep={handleBackStep}
					isClean={cleanAllState}
					result={result}
				/>
				<StepThree
					stepThree={step}
					stepEndThree={handleNextStep}
					addDataStepThree={handleDataStepThree}
					backStep={handleBackStep}
					isClean={cleanAllState}
					result={result}
				/>
				<StepResult StepResult={step} result={result} backStep={handleBackStep} cleanAll={handleCleanAll} />
			</div> */}
			<form onSubmit={methods.handleSubmit(handleOnSubmit)}>
				{step === 1 && <StepOne nextStep={() => setUseStep(2)} />}
				{step === 2 && <StepTwo nextStep={() => setUseStep(3)} prevStep={() => setUseStep(1)} />}
				{step === 3 && <StepThree nextStep={() => setUseStep(4)} prevStep={() => setUseStep(2)} />}
				{step === 4 && (
					<StepResult
						prevStep={() => setUseStep(3)}
						data={methods.getValues()}
						onClear={() => {
							methods.reset()
							setUseStep(1)
						}}
					/>
				)}
			</form>
		</main>
	)
}

export default MultiStepForm
