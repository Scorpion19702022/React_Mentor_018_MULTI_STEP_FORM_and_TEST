import { useContext } from 'react'
import StepOne from '../StepOne/StepOne'
import StepResult from '../StepResult/StepResult'
import StepThree from '../StepThree/StepThree'
import StepTwo from '../StepTwo/StepTwo'
import styles from './MultiStepForm.module.css'
import MultiStepContext from '../Context/MultiStepContext'

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
	} = useContext(MultiStepContext)

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
			<div className={styles.box_steps}>
				<StepOne stepOne={step} stepEndOne={handleNextStep} addDataStepOne={handleDataStepOne} />
				<StepTwo
					stepTwo={step}
					stepEndTwo={handleNextStep}
					addDateStepTwo={handleDataStepTwo}
					backStep={handleBackStep}
				/>
				<StepThree
					stepThree={step}
					stepEndThree={handleNextStep}
					addDataStepThree={handleDataStepThree}
					backStep={handleBackStep}
				/>
				<StepResult StepResult={step} result={result} backStep={handleBackStep} cleanAll={handleCleanAll} />
			</div>
		</main>
	)
}

export default MultiStepForm
