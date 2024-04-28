import {
	Button,
	FormControlLabel,
	FormGroup,
	Switch,
	TextField,
} from '@mui/material';

import { useState } from 'react';

function FormSigUp({ handleSubmit }) {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [prom, setProm] = useState(true);
	const [nov, setNov] = useState(true);

	const [errors, setErrors] = useState({
		name: {
			error: false,
			message: 'Debe contener al menos 3 caracteres',
		},
	});

	function validarNombre(nombre) {
		if (nombre.length >= 3) {
			return { name: { error: false, message: '' } };
		} else {
			return {
				name: { error: true, message: 'Debe contener al menos 3 caracteres' },
			};
		}
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit({ name, lastName, email, prom, nov });
			}}
		>
			<TextField
				id="nombre"
				label="Nombre"
				variant="outlined"
				fullWidth
				margin="normal"
				onChange={(e) => setName(e.target.value)}
				value={name}
				error={errors.name.error}
				helperText={errors.name.error ? errors.name.message : ''}
				autoFocus
				onBlur={(e) => {
					setErrors(validarNombre(e.target.value));
				}}
			/>
			<TextField
				id="lastName"
				label="Apellido"
				variant="outlined"
				fullWidth
				margin="normal"
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			/>
			<TextField
				id="email"
				label="email"
				variant="outlined"
				fullWidth
				margin="normal"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type="email"
			/>
			<FormGroup>
				<FormControlLabel
					control={
						<Switch
							checked={prom}
							onChange={(e) => setProm(e.target.checked)}
						/>
					}
					label="Promociones"
				/>
				<FormControlLabel
					control={
						<Switch checked={nov} onChange={(e) => setNov(e.target.checked)} />
					}
					label="Novedades"
				/>
			</FormGroup>
			<Button variant="contained" type="submit">
				Registrarse
			</Button>
		</form>
	);
}

export default FormSigUp;
