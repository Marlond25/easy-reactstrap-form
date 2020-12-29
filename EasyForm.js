import React from 'react';
import { Input, Label, Button, Form, FormGroup } from 'reactstrap';

function EzForm({id, fields, set}) {
  let key = 0;

  const setFormData = set[id];
  
  const setState = () => {
    const formData = new FormData(document.getElementById(id));
    let data = Array.from(formData.entries()).reduce((prev, pair) => ({
      ...prev,
      [pair[0]]: pair[1],
    }), {});
    data = {elementId: id, ...data};
    setFormData(data);
  }

  return (
    <Form id={id} onChange={setState}>
      {
        fields.map((field) => { 
          key += 1;

          return (
              <FormGroup key={key}>
                <Label for={field.id}> {field.label} </Label>
                <Input 
                  type={field.type}
                  id={field.id}
                  name={field.name}
                >
                  {/* If options are provided, render as a dropdown list! */}
                  {field.options ? 
                    field.options.map((option) => {
                      key += 2;
                      return (
                      <option key={key}>{option}</option>
                    )}) : null
                  }
                </Input>
              </FormGroup>
          )})
      }
      <Button type="button" id={id + "_button"} name={id + "_button"}>Submit</Button>
    </Form>
  );
}

export default EzForm;