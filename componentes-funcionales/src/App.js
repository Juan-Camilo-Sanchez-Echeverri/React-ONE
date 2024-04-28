import { Container, Typography } from '@mui/material';
import './App.css';
import FormSigUp from './components/FormSigUp';

function App() {
	const handleSubmit = (valores) => {
		console.log(valores);
	};

	return (
		<Container component="section" maxWidth="sm">
			<Typography variant="h3" component="h1" align="center">
				Formulario de Registro
			</Typography>
			<FormSigUp handleSubmit={handleSubmit} />
		</Container>
	);
}

export default App;
