import { createContext } from 'react';
import { Data } from '../types';

type Action = { type: string; payload: any };

const FormState: Data = {
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

export const FormContext = createContext<{ state: typeof FormState; dispatch: (action: Action) => void }>({
	state: FormState,
	dispatch: () => {}
});
