import React, { useContext } from 'react';
import { TextInput } from 'ustudio-ui';
import Button from 'ustudio-ui/components/Button';

import { FormContext } from '../../context/Context';

type ItemType = {
  relatedId: string;
  value: unknown;
};

export const Item = ({ relatedId }: ItemType) => {
  const { state, dispatch } = useContext(FormContext);

  return (
    <>
      <Button appearance="outlined" intent="negative">
        Remove Item
      </Button>
      <label>
        Description
        <TextInput onChange={(e) => dispatch({ type: 'EDIT_ITEM', payload: e })} />
      </label>
    </>
  );
};
