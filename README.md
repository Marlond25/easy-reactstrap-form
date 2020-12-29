# This is a Reactjs component meant to be used within an application for building forms easyly.

## INSTALATION

npm i ezform

## USE

### In your wrapping component, import the ezform component:

import Ezform from 'Ezform.js'

## STATE

### Create a state as follows:

const [formData, setFormData] = useState({});

const selectSet = {
  form1: setFormData,
};

## FIELDS

### Ezform recieves an Array of fields with its properties:

const fields = [
  { type: 'email',
    name: 'email',
    id: 'exampleEmail',
    label: 'Email'
  }, 
  {
    type: 'password',
    name: 'password',
    id: 'examplePassword',
    label: 'Password'
  }, 
  {
    type: 'select',
    name: 'select',
    id: 'exampleSelect',
    label: 'Select',
    options: [
      1,
      2,
      3,
      4,
      5
    ]
  },
  { type: 'textarea',
    name: 'text',
    id: 'exampleText',
    label: 'Text Area'
  }
];

## IMPLEMENTATION

### Implement the component as follows:

<EzForm id="form1" fields={fields} set={selectSet} />
