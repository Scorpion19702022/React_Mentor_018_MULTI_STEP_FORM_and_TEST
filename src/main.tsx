import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MultiStepProvider } from './Components/Context/MultiStepContext.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MultiStepProvider>
			<App />
		</MultiStepProvider>
	</StrictMode>
)
