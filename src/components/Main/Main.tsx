import * as React from 'react';
import { useContext } from 'react';
import Text from 'ustudio-ui/components/Text';
import Flex from 'ustudio-ui/components/Flex';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import TextArea from 'ustudio-ui/components/Input/TextArea';
import Button from 'ustudio-ui/components/Button';
import { css } from 'styled-components';
import styled from 'styled-components';

import AdditionalLots from '../AdditionalLots';
import { FormContext } from '../../context/Context';

const Form = styled.form`
  width: 40%;
`;

const Label = styled.label`
  width: 100%;
`;

export const Main = () => {
  const { state, dispatch } = useContext(FormContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <Flex
      alignment={{
        horizontal: 'center',
        vertical: 'center',
      }}
      direction="column"
    >
      <Text
        variant="h3"
        styled={{
          Text: css`
            margin: 30px;
          `,
        }}
      >
        Create Tender
      </Text>

      <Form className="form" onSubmit={handleSubmit}>
        <Text variant="span"> Please fill in the fields: </Text>
        <Flex
          direction="row"
          alignment={{ horizontal: 'center' }}
          styled={{
            Flex: css`
              margin: 30px;
            `,
          }}
        >
          <Label>
            Tender title:
            <TextInput
              isRequired
              name="title"
              placeholder="Tender Title"
              onChange={(value) => dispatch({ type: 'set', payload: value, path: 'tender.title' })}
            />
          </Label>
        </Flex>

        <Flex
          alignment={{ horizontal: 'center' }}
          styled={{
            Flex: css`
              margin: 30px;
            `,
          }}
        >
          <Label>
            Tender description
            <TextArea
              isRequired
              name="description"
              placeholder="Tender description"
              onChange={(value) => dispatch({ type: 'set', payload: value, path: 'tender.description' })}
            />
          </Label>
        </Flex>

        <Flex>
          <Label>
            Scheme:
            <TextInput isDisabled={true} placeholder="CPV" value="CPV" />
          </Label>

          <Label>
            Scheme id:
            <TextInput
              placeholder="id"
              onChange={(value) => dispatch({ type: 'set', payload: value, path: 'tender.classification.id' })}
            />
          </Label>

          <Label>
            Scheme description:
            <TextInput
              placeholder="description"
              onChange={(value) => dispatch({ type: 'set', payload: value, path: 'tender.classification.description' })}
            />
          </Label>
        </Flex>

        <AdditionalLots />

        <Flex
          alignment={{
            horizontal: 'end',
          }}
          margin={{ top: 'medium', bottom: 'large' }}
        >
          <Button>Submit</Button>
        </Flex>
      </Form>
    </Flex>
  );
};
