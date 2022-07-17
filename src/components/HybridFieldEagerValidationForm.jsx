import { useState } from "react";
import PageHeader from "./PageHeader";
import Form from "./Form";
import { baseForm } from "../constants/initialForm";
import { UI_STRINGS } from "../constants/appStrings";
import { updateFormField, updateValidationMessage } from "../helpers/form";
import { FORM_SUBMIT_MOCK_WAIT } from "../constants/timeouts";
const {
  SUBMIT,
  LOADING,
  FIELD_EAGER_VALIDATION_SUBTITLE,
  FIELD_EAGER_VALIDATION_TITLE,
} = UI_STRINGS;

const NoValidationForm = () => {
  const [formFields, setFormFields] = useState(baseForm);
  const [submitText, setSubmitText] = useState(SUBMIT);

  const validateForm = () => {
    const tempFormFields = [...formFields];
    tempFormFields.forEach((field) => {
      const validationMessages = field.validate();
      field.validationMessage = validationMessages[0];
    });

    setFormFields(tempFormFields);
  };

  /**
   * We validate on submit as a final catch-all
   */
  const onSubmitClick = () => {
    setSubmitText(LOADING);
    validateForm();

    setTimeout(() => {
      setSubmitText(SUBMIT);
    }, FORM_SUBMIT_MOCK_WAIT);
  };

  // We validate each field on inputChange IF it is dirty
  const onInputChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = updateFormField(formFields, name, value);
    setFormFields(updatedForm);
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const fieldIndex = formFields.findIndex((f) => f.name === name);

    // Checking if the field was erroneous
    if (formFields[fieldIndex].validationMessage) {
      let updatedForm = updateFormField(formFields, name, value);
      const validationMessages = updatedForm[fieldIndex].validate();
      updatedForm = updateValidationMessage(
        updatedForm,
        name,
        validationMessages[0]
      );
      setFormFields(updatedForm);
    }
  };

  // We are validating on blur
  const onInputBlur = (e) => {
    const { name, value } = e.target;
    const fieldIndex = formFields.findIndex((f) => f.name === name);
    let updatedForm = updateFormField(formFields, name, value);
    const validationMessages = updatedForm[fieldIndex].validate();
    updatedForm = updateValidationMessage(
      updatedForm,
      name,
      validationMessages[0]
    );
    setFormFields(updatedForm);
  };

  return (
    <div>
      <PageHeader
        title={FIELD_EAGER_VALIDATION_TITLE}
        subtitle={FIELD_EAGER_VALIDATION_SUBTITLE}
      />

      <Form
        onInputBlur={onInputBlur}
        onInputChange={onInputChange}
        onSubmitClick={onSubmitClick}
        fields={formFields}
        submitText={submitText}
      />
    </div>
  );
};

export default NoValidationForm;
