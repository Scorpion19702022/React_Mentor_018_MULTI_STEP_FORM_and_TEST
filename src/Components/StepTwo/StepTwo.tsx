import styles from './StepTwo.module.css'

const StepTwo = () => {
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

export default StepTwo
