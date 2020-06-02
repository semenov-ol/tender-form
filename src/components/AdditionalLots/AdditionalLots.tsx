import React, { useState } from 'react';
import Button from 'ustudio-ui/components/Button';
import Flex from 'ustudio-ui/components/Flex';
import { v4 as uuid } from 'uuid';

import Lot from '../Lot';

export const AdditionalLots = () => {
  const [lotCount, setLotCount] = useState(0);

  const addLot = () => {
    setLotCount((prev) => prev + 1);
  };
  const removeLot = () => {
    setLotCount((prev) => prev - 1);
  };
  let lots = [];
  for (let i = 0; i < lotCount; i++) {
    const id = uuid();
    lots.push(<Lot id={id} />);
  }
  return (
    <>
      {lots}
      <Flex margin={{ top: 'medium' }} alignment={{ horizontal: 'space-around' }}>
        <Button onClick={addLot}>Add lot</Button>
        {lotCount === 0 ? null : <Button onClick={removeLot}>Remove lot</Button>}
      </Flex>
    </>
  );
};
