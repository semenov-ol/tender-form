import React, { useContext } from 'react';
import Button from 'ustudio-ui/components/Button';
import Flex from 'ustudio-ui/components/Flex';
import { v4 as uuid } from 'uuid';
import { FormContext } from '../../context/Context';

import Lot from '../Lot';

export const AdditionalLots = () => {
  const { state, dispatch } = useContext(FormContext);

  const lots = state.tender.lots.map((lot, index) => {
    return <Lot id={lot.id} title={lot.title} key={lot.id} index={index} />;
  });

  const id = uuid();

  const addLot = () => {
    dispatch({ type: 'set', payload: { title: '', id: id }, path: `tender.lots[${state.tender.lots.length}]` });
  };

  return (
    <>
      {lots}
      <Flex margin={{ top: 'medium' }} alignment={{ horizontal: 'space-around' }}>
        <Button intent="positive" onClick={addLot}>
          Add lot
        </Button>
      </Flex>
    </>
  );
};
