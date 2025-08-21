import type { StepOneTypes } from './Interfaces/StepOneTypes'

import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './StepOne.module.css'

interface initialProps {
	nextStep: () => void
}

const StepOne = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<StepOneTypes>()

	const onSubmit: SubmitHandler<StepOneTypes> = data => console.log(data)

	return (
		<section className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>wpisz</label>
					<input type='text' {...register('firstName')} />
					{errors.firstName && <span>{errors.firstName}</span>}
				</div>
				<div>
					<label>wpisz</label>
					<input type='text' {...register('lastName')} />
					{errors.lastName && <span>{errors.lastName}</span>}
				</div>
				<button>przejdź dalej</button>
			</form>
		</section>
	)
}

export default StepOne
