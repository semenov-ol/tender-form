import React, { useContext } from 'react';
import { TextInput } from 'ustudio-ui';
import Button from 'ustudio-ui/components/Button';
import Flex from 'ustudio-ui/components/Flex';
import RadioGroup from 'ustudio-ui/components/RadioGroup';
import { css } from 'styled-components';

import { FormContext } from '../../context/Context';

type ItemType = {
  relatedLot: string;
  value: unknown;
  index: number;
};

export const Item = ({ relatedLot, index }: ItemType) => {
  const { state, dispatch } = useContext(FormContext);

  return (
    <>
      <Flex
        direction="column"
        styled={{
          Flex: css`
            margin-top: 10px;
            padding: 15px;
            border: 1px dashed grey;
          `,
        }}
      >
        <label>
          Description
          <TextInput
            onChange={(value) => dispatch({ type: 'set', payload: value, path: `tender.items[${index}].description` })}
          />
        </label>
        <Flex margin={{ top: 'regular', bottom: 'regular' }}>
          <label>
            Scheme:
            <TextInput isDisabled={true} placeholder="CPV" value="CPV" />
          </label>
          <label>
            Scheme id:
            <TextInput
              placeholder="id"
              onChange={(value) =>
                dispatch({ type: 'set', payload: value, path: `tender.items[${index}].classification.id` })
              }
            />
          </label>
          <label>
            Scheme description:
            <TextInput
              placeholder="description"
              onChange={(value) =>
                dispatch({ type: 'set', payload: value, path: `tender.items.[${index}].classification.description` })
              }
            />
          </label>
        </Flex>
        <label>
          Quantity:
          <TextInput
            name="quantity"
            onChange={(v) => dispatch({ type: 'set', payload: v, path: `tender.items[${index}].quantity` })}
          />
        </label>
        <RadioGroup
          direction="row"
          name="unit"
          options={{
            '1': {
              label: 'metre',
              value: 123,
            },
            '2': {
              label: 'kilo',
              value: 321,
            },
          }}
          onChange={(v) =>
            dispatch({ type: 'set', payload: { id: v.value, name: v.label }, path: `tender.items[${index}].unit` })
          }
          styled={{
            RadioGroup: css`
              margin: auto;
              margin-top: 20px;
            `,
          }}
        />
        <Flex alignment={{ horizontal: 'end' }} margin={{ top: 'regular' }}>
          <Button appearance="outlined" intent="negative">
            Remove Item
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
