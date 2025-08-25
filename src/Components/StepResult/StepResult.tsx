import styles from './StepResult.module.css'

const StepResult = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>{`resultat`.toLocaleUpperCase()}</h2>
			<div className={styles.box_list}>
				<span className={styles.list}>
					{`imię`.toLocaleUpperCase()}
					<span className={styles.result}>Jacek</span>
				</span>
				<span className={styles.list}>
					{`imię`.toLocaleUpperCase()}
					<span className={styles.result}>Jacek</span>
				</span>
				<span className={styles.list}>
					{`imię`.toLocaleUpperCase()}
					<span className={styles.result}>Jacek</span>
				</span>
				<span className={styles.list}>
					{`imię`.toLocaleUpperCase()}
					<span className={styles.result}>Jacek</span>
				</span>
				<span className={styles.list}>
					{`imię`.toLocaleUpperCase()}
					<span className={styles.result}>Jacek</span>
				</span>
				<span className={styles.list}>
					{`imię`.toLocaleUpperCase()}
					<span className={styles.result}>Jacek</span>
				</span>
			</div>
			<div className={styles.box_btns}>
				<button className={styles.btn}>cofnij</button>
				<button className={styles.btn}>wyczyść</button>
			</div>
		</section>
	)
}

export default StepResult
