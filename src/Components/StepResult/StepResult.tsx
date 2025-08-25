import styles from './StepResult.module.css'

const StepResult = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>{`resultat`.toLocaleUpperCase()}</h2>
		</section>
	)
}

export default StepResult
