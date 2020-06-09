import React, { useReducer } from 'react';
import { ThemeProvider } from 'ustudio-ui/theme';
import './App.css';
import Main from './components/Main';
import { FormContext } from './context/Context';
import { Data } from './types';
import { reducer } from './context/Reducer';

function App() {
	const initialState: Data = {
		tender: {
			title: '',
			description: '',
			classification: {
				scheme: 'CPV',
				id: '',
				description: ''
			},
			lots: [],
			items: []
		}
	};

	const [ state, dispatch ] = useReducer(reducer, initialState);
	return (
		<ThemeProvider>
			<FormContext.Provider value={{ state, dispatch }}>
				<Main />
			</FormContext.Provider>
		</ThemeProvider>
	);
}

export default App;
