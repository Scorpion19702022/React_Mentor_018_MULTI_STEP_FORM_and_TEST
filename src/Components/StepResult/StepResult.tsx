import styles from './StepResult.module.css'

const StepResult = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>{`resultat`.toLocaleUpperCase()}</h2>
			<div className={styles.box_list}></div>
		</section>
	)
}

export default StepResult
