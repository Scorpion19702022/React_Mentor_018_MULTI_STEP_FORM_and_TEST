import styles from './StepResultItem.module.css'

const StepResultItem = () => {
	return (
		<div className={styles.box_list}>
			<span className={styles.list}>
				{`imię:`.toLocaleUpperCase()}
				<span className={styles.result}> Jacek</span>
			</span>
			<span className={styles.list}>
				{`imię:`.toLocaleUpperCase()}
				<span className={styles.result}> Jacek</span>
			</span>
			<span className={styles.list}>
				{`imię:`.toLocaleUpperCase()}
				<span className={styles.result}> Jacek</span>
			</span>
			<span className={styles.list}>
				{`imię:`.toLocaleUpperCase()}
				<span className={styles.result}> Jacek</span>
			</span>
			<span className={styles.list}>
				{`imię:`.toLocaleUpperCase()}
				<span className={styles.result}> Jacek</span>
			</span>
			<span className={styles.list}>
				{`imię:`.toLocaleUpperCase()}
				<span className={styles.result}> Jacek</span>
			</span>
		</div>
	)
}

export default StepResultItem
