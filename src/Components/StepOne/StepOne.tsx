import type { StepOneTypes } from './Interfaces/StepOneTypes'

import { useForm, type SubmitHandler } from 'react-hook-form'
import styles from './StepOne.module.css'
import { useEffect } from 'react'
import type { ResultTypes } from '../Types/ResultTypes'

interface initialProps {
	stepOne: number
	stepEndOne: () => void
	addDataStepOne: (firstName: string, lastName: string) => void
	isClean: boolean
	result: ResultTypes
	nextStep: () => void
}

const StepOne: React.FC<initialProps> = ({ stepOne, stepEndOne, addDataStepOne, isClean, result, nextStep }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<StepOneTypes>({
		defaultValues: {
			firstName: result.firstNameResult || '',
			lastName: result.lastNameResult || '',
		},
	})

	const onSubmit: SubmitHandler<StepOneTypes> = ({ firstName, lastName }) => {
		stepEndOne()
		addDataStepOne(firstName, lastName)
	}

	// useEffect(() => {
	// 	if (isClean) {
	// 		reset()
	// 	}
	// }, [isClean, reset])

	useEffect(() => {
		if (isClean) {
			reset({ firstName: '', lastName: '' })
		} else {
			reset({
				firstName: result.firstNameResult || '',
				lastName: result.lastNameResult || '',
			})
		}
	}, [isClean, result, reset])

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
			{/* <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
			</form> */}
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
				<button className={styles.btn} onClick={nextStep}>
					przejdź dalej
				</button>
			</div>
		</section>
	)
}

export default StepOne
