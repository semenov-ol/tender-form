import React, { useState, useContext } from 'react';
import Button from 'ustudio-ui/components/Button';
import Flex from 'ustudio-ui/components/Flex';
import { v4 as uuid } from 'uuid';
import { FormContext } from '../../context/Context';

import Lot from '../Lot';

export const AdditionalLots = () => {
  const { state, dispatch } = useContext(FormContext);
  const lots = state.tender.lots.map((item) => <Lot id={item.id} title={item.title} key={item.id} />);
  const id = uuid();
  const addLot = () => {
    dispatch({ type: 'ADD_LOT', payload: { id: id } });
  };

  return (
    <>
      {lots}
      <Flex margin={{ top: 'medium' }} alignment={{ horizontal: 'space-around' }}>
        <Button onClick={addLot}>Add lot</Button>
      </Flex>
    </>
  );
};
