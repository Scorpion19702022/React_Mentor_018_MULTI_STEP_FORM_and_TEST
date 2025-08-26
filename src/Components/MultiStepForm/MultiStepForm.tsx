import { useContext } from 'react'
import StepOne from '../StepOne/StepOne'
import StepResult from '../StepResult/StepResult'
import StepThree from '../StepThree/StepThree'
import StepTwo from '../StepTwo/StepTwo'
import styles from './MultiStepForm.module.css'
import MultiStepContext from '../Context/MultiStepContext'

const MultiStepForm = () => {
	const { step } = useContext(MultiStepContext)

	return (
		<main className={styles.wrapper}>
			<StepOne isStepOne={step} />
			<StepTwo isStepTwo={step} />
			<StepThree />
			<StepResult />
		</main>
	)
}

export default MultiStepForm
