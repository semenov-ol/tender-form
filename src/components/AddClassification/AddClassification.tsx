import React, { useContext } from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import styled from 'styled-components';

import { FormContext } from '../../context/Context';

type ClassificationType = {
  index: number;
  classIndex: number;
  relatedLot: string;
  itemId: string;
};

const Btn = styled.button`
  background-color: #ff9700;
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px;
`;

export const AddClassification = ({ index, classIndex, relatedLot, itemId }: ClassificationType) => {
  const { state, dispatch } = useContext(FormContext);

  const removeClass = () => {
    dispatch({ type: 'remove_class', payload: { index: index, classIndex: classIndex }, path: '' });
  };

  const curItem = state.tender.items.filter((item) => item.relatedLot === relatedLot)[0];

  return (
    <Flex margin={{ top: 'regular', bottom: 'regular' }}>
      <label>
        <Text variant="small">Scheme:</Text>
        <TextInput isDisabled={true} placeholder="CPV" value="CPV" />
      </label>

      <label>
        <Text variant="small">Scheme id:</Text>
        <TextInput
          placeholder="id"
          value={curItem.additionalClassification[classIndex].id}
          onChange={(value) =>
            dispatch({
              type: 'add_additional_class_id',
              payload: { value: value, itemId: itemId, classIndex: classIndex },
              path: ``,
            })
          }
        />
      </label>

      <label>
        <Text variant="small"> Scheme description:</Text>
        <TextInput
          placeholder="description"
          value={curItem.additionalClassification[classIndex].description}
          onChange={(value) =>
            dispatch({
              type: 'set_additional_class_desc',
              payload: { value: value, itemId: itemId, classIndex: classIndex },
              path: ``,
            })
          }
        />
      </label>

      <Btn type="button" onClick={removeClass}>
        <i className="fa fa-trash" />
      </Btn>
    </Flex>
  );
};
