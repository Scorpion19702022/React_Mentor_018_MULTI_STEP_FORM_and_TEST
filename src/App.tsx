import styles from './App.module.css'
import MultiStepForm from './Components/MultiStepForm/MultiStepForm'

function App() {
	return (
		<main className={styles.wrapper}>
			<div className={styles.header}>
				<h1 className={styles.heading}>- Formularz -</h1>
				<span className={styles.text_info}>wypełnij formularze wykorzystując trzy kroki i zobacz wynik końcowy</span>
			</div>
			<MultiStepForm />
		</main>
	)
}

export default App
