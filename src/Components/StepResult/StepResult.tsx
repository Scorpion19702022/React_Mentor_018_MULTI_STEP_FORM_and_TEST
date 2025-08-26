import StepResultItem from '../StepResultItem/StepResultItem'
import styles from './StepResult.module.css'

const StepResult = () => {
	return (
		<section className={styles.wrapper}>
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
