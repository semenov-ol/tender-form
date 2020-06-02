import * as React from 'react';
import { useReducer, useState } from 'react';
import Text from 'ustudio-ui/components/Text';
import Flex from 'ustudio-ui/components/Flex';
import RadioGroup from 'ustudio-ui/components/RadioGroup';
import { TextInput } from 'ustudio-ui';
import { TextArea } from 'ustudio-ui';
import Button from 'ustudio-ui/components/Button';
import { v4 as uuid } from 'uuid';
import { css } from 'styled-components';

import { reducer } from '../../context/Reducer';
import { Data } from '../../types';
import { Unit } from '../../types';

export const Main = () => {
	const initialState: Data = {
		tender: {
			title: '',
			description: '',
			classification: {
				scheme: 'CPV',
				id: '',
				description: ''
			},
			lots: [
			],
			items: [
			]
		}
	};
	const [ state, dispatch ]: any = useReducer<any>(reducer, initialState);
	const id = uuid();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(state);
	};

	const fieldRender = () => {
    const id = '12345'
		return (
      <>
			<TextInput
				isRequired={false}
				placeholder="TItle of additional info"
				onChange={(e) => dispatch({ type: 'ADDITIONAL', payload: {title: e, id: id} })}
			/>
      <TextInput
				isRequired={false}
				placeholder="description of additional info"
				onChange={(e) => dispatch({ type: 'ADDITIONAL_DESC', payload: {desc: e, id: id} })}
			/>
      <RadioGroup
					styled={{
						RadioGroup: css`margin: 30px;`
          }}
					direction="row"
					name="unit2"
					onChange={(e) => dispatch({ type: 'ADD_UNIT2', payload: {title: e, id: id} })}
					options={{
						'1': { label: 'metre', value: '123' },
						'2': { label: 'kilo', value: '312' }
					}}
				/>
    </>
		);
  };
  
  const id1 = uuid()

	return (
		<Flex
			alignment={{
				horizontal: 'center',
				vertical: 'center'
			}}
			direction="column"
		>
			<Text
				variant="h3"
				styled={{
					Text: css`margin: 30px;`
				}}
			>
				Create Tender
			</Text>
			<form className="form" onSubmit={handleSubmit}>
				<Text variant="span"> Please fill in the fields: </Text>
				<Flex
					direction="row"
					alignment={{ horizontal: 'space-between' }}
					styled={{
						Flex: css`margin: 30px;`
					}}
				>
					<label>
						Tender title:
						<TextInput
							isRequired
							name="title"
							placeholder="Tender Title"
							value={state.title}
							onChange={(e) => dispatch({ type: 'ADD_TITLE', payload: e })}
						/>
					</label>
				</Flex>
				<Flex
					styled={{
						Flex: css`margin: 30px;`
					}}
				>
					<label>
						Tender description
						<TextArea
							isRequired
							name="description"
							placeholder="Tender description"
							value={state.description}
							onChange={(e) => dispatch({ type: 'ADD_DESC', payload: e })}
						/>
					</label>
				</Flex>
				<RadioGroup
					styled={{
						RadioGroup: css`margin: 30px;`
          }}
					direction="row"
					name="unit"
					onChange={(e) => dispatch({ type: 'ADD_UNIT', payload: {title: e, id: id1} })}
					options={{
						'1': { label: 'metre', value: '123' },
						'2': { label: 'kilo', value: '312' }
					}}
				/>
				{fieldRender()}
				<Flex
					alignment={{
						horizontal: 'end'
					}}
					styled={{
						Flex: css`margin-top: 30px;`
					}}
				>
					<Button>Submit</Button>
				</Flex>
			</form>
		</Flex>
	);
};
