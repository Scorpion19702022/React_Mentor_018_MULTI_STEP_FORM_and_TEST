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
			<div className={styles.box_heading}>
				<h2 className={styles.heading_step_one_active}>{`krok pierwszy`.toLocaleUpperCase()}</h2>
				<h2 className={styles.heading_step_two_active}>{`krok drugi`.toLocaleUpperCase()}</h2>
				<h2 className={styles.heading_step_three_active}>{`krok trzeci`.toLocaleUpperCase()}</h2>
			</div>
			<div className={styles.box_steps}>
				<StepOne isStepOne={step} />
				<StepTwo isStepTwo={step} />
				<StepThree />
				<StepResult />
			</div>
		</main>
	)
}

export default MultiStepForm
