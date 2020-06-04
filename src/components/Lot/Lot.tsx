import React, { useContext } from 'react';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import Button from 'ustudio-ui/components/Button';
import Flex from 'ustudio-ui/components/Flex';
import { css } from 'styled-components';
import { v4 as uuid } from 'uuid';

import Item from '../Item';
import { FormContext } from '../../context/Context';

type LotProps = {
  id: string;
  title: string;
  index: number;
};

export const Lot = ({ id, title, index }: LotProps) => {
  const { state, dispatch } = useContext(FormContext);
  const itemId = uuid();

  const removeLot = (id: string) => {
    dispatch({ type: 'REMOVE_LOT', payload: { id: id }, path: `tender.lots[${index}]` });
  };

  const addItem = () => {
    dispatch({
      type: 'set',
      payload: {
        relatedLot: id,
        id: itemId,
        description: '',
        classification: { sheme: 'CPV' },
        additionalClassification: [],
      },
      path: `tender.items[${state.tender.items.length}]`,
    });
  };

  const fields = state.tender.items.filter((item)=> item.relatedLot === id).map((item: any, index: number) => <Item relatedLot={id} key={item.id} value={item} index={index} />)

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
            onChange={(value) => dispatch({ type: 'set', payload: value, path: `tender.lots[${index}].title` })}
          />
        </label>
        {fields}
        <Flex margin={{ top: 'medium' }} alignment={{ horizontal: 'space-between' }}>
          <Button appearance="outlined" intent="positive" onClick={addItem}>
            Add Item
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
