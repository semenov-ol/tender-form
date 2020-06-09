import React, { useContext } from 'react';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import Button from 'ustudio-ui/components/Button';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';
import RadioGroup from 'ustudio-ui/components/RadioGroup';
import { css } from 'styled-components';
import { v4 as uuid } from 'uuid';

import { FormContext } from '../../context/Context';
import AddClassification from '../AddClassification';

type ItemType = {
  relatedLot: string;
  value: unknown;
  index: number;
  itemId: string;
};

export const Item = ({ relatedLot, index, itemId }: ItemType) => {
  const { state, dispatch } = useContext(FormContext);

  const removeItem = () => {
    dispatch({ type: 'remove_item', payload: index, path: '' });
  };

  const addClassification = () => {
    dispatch({
      type: 'add_class',
      payload: { scheme: 'CPV', id: '', description: '', relatedLot: relatedLot, index: index, itemId: itemId },
      path: `tender.items[${index}].additionalClassification[${state.tender.items[index].additionalClassification.length}]`,
    });
  };

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
            onChange={(value) =>
              dispatch({
                type: 'set_item_desc',
                payload: { value: value, relatedLot: relatedLot, itemId: itemId },
                path: ``,
              })
            }
          />
        </label>

        <Flex margin={{ top: 'regular', bottom: 'regular' }}>
          <label>
            <Text variant="small">Scheme:</Text>
            <TextInput isDisabled={true} placeholder="CPV" value="CPV" />
          </label>

          <label>
            <Text variant="small">Scheme id:</Text>
            <TextInput
              placeholder="id"
              onChange={(value) =>
                dispatch({ type: 'set_class_id', payload: { value: value, itemId: itemId }, path: `` })
              }
            />
          </label>

          <label>
            <Text variant="small"> Scheme description:</Text>
            <TextInput
              placeholder="description"
              onChange={(value) =>
                dispatch({ type: 'set_class_desc', payload: { value: value, itemId: itemId }, path: `` })
              }
            />
          </label>
        </Flex>
        <label>
          Quantity:
          <TextInput
            name="quantity"
            onChange={(value) =>
              dispatch({ type: 'set_quantity', payload: { value: value, itemId: itemId }, path: `` })
            }
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
          onChange={({ value, label }) =>
            dispatch({ type: 'set_unit', payload: { id: value, name: label, itemId: itemId }, path: `` })
          }
          styled={{
            RadioGroup: css`
              margin: auto;
              margin-top: 20px;
            `,
          }}
        />

        {state.tender.items
          .filter((item) => item.relatedLot === relatedLot)
          [index].additionalClassification.map((item, classIndex) => (
            <AddClassification
              index={index}
              classIndex={classIndex}
              key={uuid()}
              relatedLot={relatedLot}
              itemId={itemId}
            />
          ))}

        <Flex>
          <Button type="button" onClick={addClassification}>
            Add Classification
          </Button>
        </Flex>

        <Flex alignment={{ horizontal: 'end' }} margin={{ top: 'regular' }}>
          <Button type="button" appearance="outlined" intent="negative" onClick={removeItem}>
            Remove Item
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
