import StepResultItem from '../StepResultItem/StepResultItem'
import styles from './StepResult.module.css'

interface initialProps {
	isStepResult: number
}

const StepResult: React.FC<initialProps> = ({ isStepResult }) => {
	return (
		<section className={isStepResult === 4 ? styles.wrapper : styles.wrapper_end}>
			<h2 className={styles.heading}>{`resultat`.toLocaleUpperCase()}</h2>
			<StepResultItem />
			<div className={styles.box_btns}>
				<button className={styles.btn}>cofnij</button>
				<button className={styles.btn}>wyczyść</button>
			</div>
		</section>
	)
}

export default StepResult
