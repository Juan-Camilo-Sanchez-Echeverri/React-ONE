import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import {
	validarNombre,
	validarApellidos,
	validarTelefono,
} from './validaciones';

const DatosPersonales = ({ updateStep }) => {
	const [name, setName] = useState({ value: '', valid: null });
	const [lastName, setLastName] = useState({ value: '', valid: null });
	const [phone, setPhone] = useState({ value: '', valid: null });

	return (
		<Box
			component="form"
			autocomplete="off"
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
			onSubmit={(e) => {
				e.preventDefault();
				updateStep(2);
			}}
		>
			<TextField
				label="Nombre"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				value={name.value}
				onChange={(e) => {
					const value = e.target.value;
					const valid = validarNombre(value);
					setName({ value, valid });
				}}
				error={name.valid === false}
				helperText={
					name.valid === false && 'El nombre debe tener entre 1 y 30 caracteres'
				}
			/>
			<TextField
				label="Apellidos"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				value={lastName.value}
				onChange={(e) => {
					const value = e.target.value;
					const valid = validarApellidos(value);
					setLastName({ value, valid });
				}}
				error={lastName.valid === false}
				helperText={
					lastName.valid === false &&
					'El apellido debe tener entre 1 y 50 caracteres'
				}
			/>
			<TextField
				label="Número telefónico"
				variant="outlined"
				fullWidth
				margin="dense"
				type="number"
				inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
				value={phone.value}	
				onChange={(e) => {
					const value = e.target.value;
					const valid = validarTelefono(value);
					setPhone({ value, valid });
				}}
				error={phone.valid === false}
				helperText={
					phone.valid === false && 'El número telefónico debe tener 10 dígitos'
				}
			/>
			<Button variant="contained" type="submit">
				Siguiente
			</Button>
		</Box>
	);
};

export default DatosPersonales;
