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

	const validationForm = {
		phoneNumber: {
			required: 'musisz wypełnić pole',
			minLength: {
				value: 9,
				message: 'mumer powinien być conajmniej 9-cio cyfrowy',
			},
		},
		cityName: {
			required: 'musisz wypełnić pole',
		},
	}

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>{`krok trzeci`.toLocaleUpperCase()}</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.box_inputs}>
					<label className={styles.label}>podaj numer telefonu:</label>
					<input className={styles.input} type='number' {...register('phone', validationForm.phoneNumber)} />
					<div className={styles.box_error}>
						{errors.phone?.message && <span className={styles.error}>{errors.phone.message}</span>}
					</div>
				</div>
				<div className={styles.box_inputs}>
					<label className={styles.label}>podaj azwisko:</label>
					<input className={styles.input} type='text' {...register('city', validationForm.cityName)} />
					<div className={styles.box_error}>
						{errors.city?.message && <span className={styles.error}>{errors.city.message}</span>}
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
