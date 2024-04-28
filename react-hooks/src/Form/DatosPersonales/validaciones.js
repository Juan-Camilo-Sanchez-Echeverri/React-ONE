export function validarNombre(nombre) {
	const length = nombre.length;

	return length > 1 && length < 30 ? true : false;
}

export function validarApellidos(apellidos) {
	const length = apellidos.length;

	return length > 1 && length < 50 ? true : false;
}

export const validarTelefono = (telefono) => {
	const length = telefono.length;

	return length === 10 ? true : false;
};
