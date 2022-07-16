export const updateFormField = (formFields, name, value) => {
  const tempForm = [...formFields];
  const inputIndex = formFields.findIndex((el) => el.name === name);
  tempForm.splice(inputIndex, 1, {
    ...formFields[inputIndex],
    value,
  });
  return tempForm;
};

export const updateValidationMessage = (
  formFields,
  name,
  validationMessage
) => {
  const tempForm = [...formFields];
  const inputIndex = formFields.findIndex((el) => el.name === name);
  tempForm.splice(inputIndex, 1, {
    ...formFields[inputIndex],
    validationMessage,
  });
  return tempForm;
};
