import * as React from 'react';
import { useState } from 'react';
import Text from 'ustudio-ui/components/Text';
import Flex from 'ustudio-ui/components/Flex';
import { TextInput } from 'ustudio-ui';
import { TextArea } from 'ustudio-ui';
import Button from 'ustudio-ui/components/Button';
import { v4 as uuidv4 } from 'uuid';

export const Main = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const TenderData: Data = {
    tender: {
      title: title,
      description: description,
      classification: {
        scheme: 'CPV',
        id: uuidv4(),
        description: '',
      },
    },
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(JSON.stringify(TenderData));
  };

  return (
    <Flex
      alignment={{
        horizontal: 'center',
        vertical: 'center',
      }}
      direction="column"
    >
      <Text variant="h3"> Create Tender </Text>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <Text variant="span"> Please fill in the fields: </Text>
        <Flex direction="row" alignment={{ horizontal: 'space-between' }}>
          <label htmlFor="title">Tender title:</label>
          <TextInput
            isRequired
            name="title"
            id="title"
            placeholder="Tender Title"
            value={title}
            onChange={setTitle}
          ></TextInput>
        </Flex>
        <Flex>
          <label htmlFor="description">Tender description</label>
          <TextArea
            isRequired
            name="description"
            id="description"
            placeholder="Tender description"
            value={description}
            onChange={setDescription}
          ></TextArea>
        </Flex>
        <Button>Submit</Button>
      </form>
    </Flex>
  );
};

interface Classification {
  scheme: 'CPV';
  id: string;
  description: string;
}

type Unit =
  | {
      id: '123';
      name: 'metre';
    }
  | {
      id: '321';
      name: 'kilo';
    };

interface Data {
  tender: {
    title: string;
    description: string;
    classification: Classification;
  };
}
