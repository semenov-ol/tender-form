import React, { useContext } from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';
import { TextInput } from 'ustudio-ui';
import Button from 'ustudio-ui/components/Button';
import styled from 'styled-components';

import { FormContext } from '../../context/Context';

type ClassificationType = {
  index: number;
  classIndex: number;
};

const Btn = styled.button`
  background-color: #ff9700;
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px;
`;

export const AddClassification = ({ index, classIndex }: ClassificationType) => {
  const { state, dispatch } = useContext(FormContext);

  const removeClass = () => {
    dispatch({ type: 'remove_class', payload: { index: index, classIndex: classIndex }, path: '' });
  };

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
          value={state.tender.items[index].additionalClassification[classIndex].id}
          onChange={(value) =>
            dispatch({
              type: 'set',
              payload: value,
              path: `tender.items[${index}].additionalClassification[${classIndex}].id`,
            })
          }
        />
      </label>
      <label>
        <Text variant="small"> Scheme description:</Text>
        <TextInput
          placeholder="description"
          value={state.tender.items[index].additionalClassification[classIndex].description}
          onChange={(value) =>
            dispatch({
              type: 'set',
              payload: value,
              path: `tender.items[${index}].additionalClassification[${classIndex}].description`,
            })
          }
        />
      </label>
      <Btn onClick={removeClass}>
        <i className="fa fa-trash"></i>
      </Btn>
    </Flex>
  );
};
