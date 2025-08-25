import StepOne from '../StepOne/StepOne'
import StepResult from '../StepResult/StepResult'
import StepThree from '../StepThree/StepThree'
import StepTwo from '../StepTwo/StepTwo'
import styles from './MultiStepForm.module.css'

const MultiStepForm = () => {
	return (
		<main className={styles.wrapper}>
			<StepOne />
			<StepTwo />
			<StepThree />
			<StepResult />
		</main>
	)
}

export default MultiStepForm
