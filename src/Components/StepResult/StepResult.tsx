import StepResultItem from '../StepResultItem/StepResultItem'
import type { ResultTypes } from '../Types/ResultTypes'
import styles from './StepResult.module.css'

interface initialProps {
	StepResult: number
	result: ResultTypes
	backStep: () => void
}

const StepResult: React.FC<initialProps> = ({ StepResult, result, backStep }) => {
	return (
		<section className={StepResult === 4 ? styles.wrapper : styles.wrapper_end}>
			<h2 className={styles.heading}>{`resultat`.toLocaleUpperCase()}</h2>
			<StepResultItem result={result} />
			<div className={styles.box_btns}>
				<button className={styles.btn} onClick={backStep}>
					cofnij
				</button>
				<button className={styles.btn}>wyczyść</button>
			</div>
		</section>
	)
}

export default StepResult
