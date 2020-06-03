import React, { useState, useContext } from 'react';
import { TextInput } from 'ustudio-ui';
import Button from 'ustudio-ui/components/Button';
import Flex from 'ustudio-ui/components/Flex';
import { css } from 'styled-components';
import { v4 as uuid } from 'uuid';

import Item from '../Item';
import { FormContext } from '../../context/Context';

type LotProps = {
  id: string;
  title: string;
};

export const Lot = ({ id, title }: LotProps) => {
  const { state, dispatch } = useContext(FormContext);

  const removeLot = (id: string) => {
    dispatch({ type: 'REMOVE_LOT', payload: { id: id } });
  };

  const itemId = uuid();

  const addItem = () => {
    dispatch({ type: 'ADD_ITEM', payload: { relatedId: id, id: itemId } });
  };

  const fields = state.tender.items.map((item: any) => <Item relatedId={id} key={itemId} value={item} />);

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
        <Button appearance="outlined" intent="negative" onClick={() => removeLot(id)}>
          Remove Lot
        </Button>
        <label>
          Lot Title:
          <TextInput
            isRequired
            name="title"
            placeholder="Lot Title"
            value={title}
            onChange={(e) => dispatch({ type: 'EDIT_LOT', payload: { title: e, id: id } })}
          />
        </label>
        {fields}
        <Flex margin={{ top: 'medium' }} alignment={{ horizontal: 'space-between' }}>
          <Button onClick={addItem}>Add Item</Button>
        </Flex>
      </Flex>
    </>
  );
};
