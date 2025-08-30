import type { ResultTypes } from '../Types/ResultTypes'
import styles from './StepResultItem.module.css'

interface initialProps {
	result: ResultTypes
}

const StepResultItem: React.FC<initialProps> = ({ result }) => {
	return (
		<div className={styles.box_list}>
			<span className={styles.list}>
				{`imię:`.toLocaleUpperCase()}
				<span className={styles.result}>{result.firstNameResult}</span>
			</span>
			<span className={styles.list}>
				{`nazwisko:`.toLocaleUpperCase()}
				<span className={styles.result}> {result.lastNameResult}</span>
			</span>
			<span className={styles.list}>
				{`wiek:`.toLocaleUpperCase()}
				<span className={styles.result}> {result.ageResult}</span>
			</span>
			<span className={styles.list}>
				{`płeć:`.toLocaleUpperCase()}
				<span className={styles.result}> {result.genderResult}</span>
			</span>
			<span className={styles.list}>
				{`numer telefonu:`.toLocaleUpperCase()}
				<span className={styles.result}> {result.phoneResult}</span>
			</span>
			<span className={styles.list}>
				{`miasto:`.toLocaleUpperCase()}
				<span className={styles.result}> {result.cityResult}</span>
			</span>
		</div>
	)
}

export default StepResultItem
