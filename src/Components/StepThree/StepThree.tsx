import { useForm, type SubmitHandler } from 'react-hook-form'

import styles from './StepThree.module.css'
import type { StepThreeTypes } from './Interfaces/StepThreeTypes'

const StepThree = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		// reset,
	} = useForm<StepThreeTypes>()

	const onSubmit: SubmitHandler<StepThreeTypes> = data => {
		console.log(data)
		// reset()
	}

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>{`krok pierwszy`.toLocaleUpperCase()}</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.box_inputs}>
					<label className={styles.label}>podaj imię:</label>
					<input className={styles.input} type='text' {...register('firstName', validationForm.firstName)} />
					<div className={styles.box_error}>
						{errors.firstName?.message && <span className={styles.error}>{errors.firstName.message}</span>}
					</div>
				</div>
				<div className={styles.box_inputs}>
					<label className={styles.label}>podaj azwisko:</label>
					<input className={styles.input} type='text' {...register('lastName', validationForm.lastName)} />
					<div className={styles.box_error}>
						{errors.lastName?.message && <span className={styles.error}>{errors.lastName.message}</span>}
					</div>
				</div>
				<div className={styles.box_btns}>
					<button className={styles.btn} type='submit'>
						przejdź dalej
					</button>
				</div>
			</form>
		</section>
	)
}

export default StepThree
