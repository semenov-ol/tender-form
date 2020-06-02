import React, { useState, useReducer, useContext } from 'react';
import { TextInput } from 'ustudio-ui';
import Button from 'ustudio-ui/components/Button';
import Flex from 'ustudio-ui/components/Flex';
import { css } from 'styled-components';
import { v4 as uuid } from 'uuid';

import Item from '../Item';
import { reducer } from '../../context/Reducer';
import { FormContext } from '../../context/Context';

type LotProps = {
  id: string;
};

export const Lot = ({ id }: LotProps) => {
  const initState = useContext(FormContext);
  const [state, dispatch] = useReducer(reducer, initState);
  const [itemCount, setItemCount] = useState(0);
  console.log(state);
  const addItem = () => {
    setItemCount((prev) => prev + 1);
  };
  const removeItem = () => {
    setItemCount((prev) => prev - 1);
  };

  let fields = [];
  for (let i = 0; i < itemCount; i++) {
    fields.push(<Item />);
  }

  return (
    <>
      <Flex
        direction="column"
        styled={{
          Flex: css`
            border: 1px solid grey;
            border-radius: 10px;
            padding: 20px;
            margin: 10px;
          `,
        }}
      >
        <label>
          Title:
          <TextInput
            isRequired
            name="title"
            placeholder="Lot Title"
            onChange={(e) => dispatch({ type: 'ADD_LOT', payload: { title: e, id: id } })}
          />
        </label>
        {fields}
        <Flex margin={{ top: 'medium' }} alignment={{ horizontal: 'space-between' }}>
          <Button onClick={addItem}>Add Item</Button>
          {itemCount === 0 ? null : <Button onClick={removeItem}>Remove item</Button>}
        </Flex>
      </Flex>
    </>
  );
};
