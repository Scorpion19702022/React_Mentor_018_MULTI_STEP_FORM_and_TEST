import type { StepOneTypes } from './Interfaces/StepOneTypes'

import { useForm, type SubmitHandler } from 'react-hook-form'
import styles from './StepOne.module.css'

interface initialProps {
	stepOne: number
	stepEndOne: () => void
	addDataStepOne: (firstName: string, lastName: string) => void
	isClean: boolean
}

const StepOne: React.FC<initialProps> = ({ stepOne, stepEndOne, addDataStepOne, isClean }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<StepOneTypes>()

	const onSubmit: SubmitHandler<StepOneTypes> = ({ firstName, lastName }) => {
		stepEndOne()
		addDataStepOne(firstName, lastName)
		if (!isClean) {
			reset()
		}
	}

	const validationForm = {
		firstName: {
			required: 'musisz wypełnić pole',
			minLength: {
				value: 3,
				message: 'pole powinno posiadać 3 znaki',
			},
		},
		lastName: {
			required: 'musisz wypełnić pole',
			minLength: {
				value: 3,
				message: 'pole powinno posiadać 3 znaki',
			},
		},
	}

	return (
		<section className={stepOne === 1 ? styles.wrapper : styles.wrapper_end}>
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

export default StepOne
