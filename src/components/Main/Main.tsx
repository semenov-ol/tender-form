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
import AdditionalLots from '../AdditionalLots';
import { FormContext } from '../../context/Context';

export const Main = () => {
	const { state, dispatch } = React.useContext(FormContext);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(state);
	};

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
							onChange={(e) => dispatch({ type: 'ADD_DESC', payload: e })}
						/>
					</label>
				</Flex>
				{/* <RadioGroup
					styled={{
						RadioGroup: css`margin: 30px;`
          }}
					direction="row"
					name="unit"
					onChange={(e) => dispatch({ type: 'ADD_UNIT', payload: {title: e} })}
					options={{
						'1': { label: 'metre', value: '123' },
						'2': { label: 'kilo', value: '312' }
					}}
				/> */}
				<AdditionalLots />
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
