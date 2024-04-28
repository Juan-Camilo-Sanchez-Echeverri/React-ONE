import { useState, createContext } from 'react';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
	const [count, setCount] = useState(0);
	const values = {
		count,
		suma() {
			setCount(count + 1);
		},
		resta() {
			setCount(count - 1);
		},
		user: {
			jwt: '',
		},
	};
	return (
		<CounterContext.Provider value={values}>{children}</CounterContext.Provider>
	);
};
