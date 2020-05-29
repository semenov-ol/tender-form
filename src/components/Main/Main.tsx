import * as React from 'react';
import { useState, useReducer } from 'react';
import Text from 'ustudio-ui/components/Text';
import Flex from 'ustudio-ui/components/Flex';
import RadioGroup from 'ustudio-ui/components/RadioGroup';
import { TextInput } from 'ustudio-ui';
import { TextArea } from 'ustudio-ui';
import Button from 'ustudio-ui/components/Button';
import { v4 as uuidv4 } from 'uuid';

import { reducer } from '../../context/Reducer';

export const Main = () => {
	interface State {
		title: string;
		description: string;
		unit: any;
	}
	const initialState: State = {
		title: '',
		description: '',
		unit: {}
	};
	const [ state, dispatch ]: any = useReducer<any>(reducer, initialState);
	const id = uuidv4();

	const TenderData: Data = {
		tender: {
			title: state.title,
			description: state.description,
			classification: {
				scheme: 'CPV',
				id: id,
				description: state.description
			},
			lots: [
				{
					id: id,
					title: state.title
				}
			],
			items: [
				{
					id: id,
					description: state.description,
					relatedLot: id,
					classification: {
						scheme: 'CPV',
						id: id,
						description: state.description
					},
					additionalClassification: [
						{
							scheme: 'CPV',
							id: id,
							description: state.description
						}
					],
					quantity: 5,
					unit: state.unit
				}
			]
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(TenderData);
	};

	return (
		<Flex
			alignment={{
				horizontal: 'center',
				vertical: 'center'
			}}
			direction="column"
		>
			<Text variant="h3"> Create Tender </Text>
			<form className="form" onSubmit={(e) => handleSubmit(e)}>
				<Text variant="span"> Please fill in the fields: </Text>
				<Flex direction="row" alignment={{ horizontal: 'space-between' }}>
					<label htmlFor="title">Tender title:</label>
					<TextInput
						isRequired
						name="title"
						id="title"
						placeholder="Tender Title"
						value={state.title}
						onChange={(e) => dispatch({ type: 'ADD_TITLE', payload: e })}
					/>
				</Flex>
				<Flex>
					<label htmlFor="description">Tender description</label>
					<TextArea
						isRequired
						name="description"
						id="description"
						placeholder="Tender description"
						value={state.description}
						onChange={(e) => dispatch({ type: 'ADD_DESC', payload: e })}
					/>
				</Flex>
				<RadioGroup
					direction="row"
					name="unit"
					onChange={(e) => dispatch({ type: 'ADD_UNIT', payload: e })}
					options={{
						'1': { label: 'metre', value: '123' },
						'2': { label: 'kilo', value: '312' }
					}}
				/>
				<Button>Submit</Button>
			</form>
		</Flex>
	);
};

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
