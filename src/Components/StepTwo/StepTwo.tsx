import { useForm, type SubmitHandler } from 'react-hook-form'
import type { StepTwoTypes } from './Interfaces/StepTwoTypes'
import styles from './StepTwo.module.css'

const StepTwo = () => {
	const genderKind = ['wybierz płeć', 'kobieta', 'mężczyzna']

	const optionSelect = genderKind.map((item, id) => (
		<option key={id} value={item}>
			{item}
		</option>
	))

	const {
		register,
		handleSubmit,
		formState: { errors },
		// reset,
	} = useForm<StepTwoTypes>()

	const onSubmit: SubmitHandler<StepTwoTypes> = data => {
		console.log(data)
		// reset()
	}

	const validationForm = {
		age: {
			required: 'musisz wypełnić pole',
			min: {
				value: 18,
				message: 'musisz być pełnoletni',
			},
		},
		gender: {
			validate: (value: string) => value === 'wybierz płeć' && 'musisz wybrać płeć',
		},
	}

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>{`krok drugi`.toLocaleUpperCase()}</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.box_inputs}>
					<label className={styles.label}>podaj wiek:</label>
					<input className={styles.input} type='number' {...register('age', validationForm.age)} />
					<div className={styles.box_error}>
						{errors.age?.message && <span className={styles.error}>{errors.age.message}</span>}
					</div>
				</div>
				<div className={styles.box_select}>
					<label className={styles.label}>podaj płeć:</label>
					<select className={styles.select} {...register('gender', validationForm.gender)}>
						{optionSelect}
					</select>
					<div className={styles.box_error}>
						{errors.gender?.message && <span className={styles.error}>{errors.gender.message}</span>}
					</div>
				</div>
				<div className={styles.box_btns}>
					<button className={styles.btn}>cofnij krok</button>
					<button className={styles.btn} type='submit'>
						przejdź dalej
					</button>
				</div>
			</form>
		</section>
	)
}

export default StepTwo
