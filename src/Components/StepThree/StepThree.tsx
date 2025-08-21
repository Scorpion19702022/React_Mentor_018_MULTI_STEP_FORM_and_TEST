import styles from './StepThree.module.css'

const StepThree = () => {
	return (
		<section className={styles.wrapper}>
			<div>
				<label>wpisz</label>
				<input type='text' />
				<span></span>
			</div>
			<button>dodaj</button>
		</section>
	)
}

export default StepThree
