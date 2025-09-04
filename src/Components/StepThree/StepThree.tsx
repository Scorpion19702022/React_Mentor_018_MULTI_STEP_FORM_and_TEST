import { useForm, type SubmitHandler } from 'react-hook-form'

import styles from './StepThree.module.css'
import type { StepThreeTypes } from './Interfaces/StepThreeTypes'
import { useEffect } from 'react'
import type { ResultTypes } from '../Types/ResultTypes'

interface initialProps {
	stepThree: number
	stepEndThree: () => void
	backStep: () => void
	addDataStepThree: (phone: string, city: string) => void
	isClean: boolean
	result: ResultTypes
}

const StepThree: React.FC<initialProps> = ({
	stepThree,
	stepEndThree,
	backStep,
	addDataStepThree,
	isClean,
	result,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
	} = useForm<StepThreeTypes>({
		defaultValues: {
			phone: result.phoneResult || '',
			city: result.cityResult || '',
		},
	})

	const onSubmit: SubmitHandler<StepThreeTypes> = ({ phone, city }) => {
		stepEndThree()
		addDataStepThree(phone, city)
	}

	// useEffect(() => {
	// 	if (!isClean) {
	// 		reset()
	// 	}
	// }, [isClean, reset])

	useEffect(() => {
		if (isClean) {
			reset({ phone: '', city: '' })
		} else {
			reset({
				phone: result.phoneResult || '',
				city: result.cityResult || '',
			})
		}
	}, [isClean, result, reset])

	useEffect(() => {
		if (stepThree !== 3) {
			clearErrors()
		}
	}, [stepThree, clearErrors])

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
		<section className={stepThree === 3 ? styles.wrapper : styles.wrapper_end}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.box_inputs}>
					<label className={styles.label}>podaj numer telefonu:</label>
					<input className={styles.input} type='number' {...register('phone', validationForm.phoneNumber)} />
					<div className={styles.box_error}>
						{errors.phone?.message && <span className={styles.error}>{errors.phone.message}</span>}
					</div>
				</div>
				<div className={styles.box_inputs}>
					<label className={styles.label}>podaj miasto:</label>
					<input className={styles.input} type='text' {...register('city', validationForm.cityName)} />
					<div className={styles.box_error}>
						{errors.city?.message && <span className={styles.error}>{errors.city.message}</span>}
					</div>
				</div>
				<div className={styles.box_btns}>
					<button className={styles.btn} onClick={backStep} type='button'>
						cofnij krok
					</button>
					<button className={styles.btn} type='submit'>
						zobacz wynik
					</button>
				</div>
			</form>
		</section>
	)
}

export default StepThree
