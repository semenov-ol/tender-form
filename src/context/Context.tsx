import { createContext } from 'react';

interface Classification {
	scheme: 'CPV';
	id: string;
	description: string;
}

type Unit =
	| {
			id: '123';
			name: 'metre';
		}
	| {
			id: '321';
			name: 'kilo';
		};

interface Data {
	tender: {
		title: string;
		description: string;
		classification: Classification;
		lots: {
			id: string;
			title: string;
		}[];
		items: {
			id: string;
			description: string;
			relatedLot: string;
			classification: Classification;
			additionalClassification: Classification[];
			quantity: number;
			unit: Unit;
		}[];
	};
}

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
