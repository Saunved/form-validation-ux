import { useState } from "react";
import PageHeader from "./PageHeader";
import Form from "./Form";
import { baseForm } from "../constants/initialForm";
import { UI_STRINGS } from "../constants/appStrings";
import { updateFormField, updateValidationMessage } from "../helpers/form";
import { FORM_SUBMIT_MOCK_WAIT } from "../constants/timeouts";
const { SUBMIT, LOADING, EAGER_VALIDATION_TITLE, EAGER_VALIDATION_SUBTITLE } =
  UI_STRINGS;

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

  /**
   *  We validate whenever the user types anything
   */
  const onInputChange = (e) => {
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
        title={EAGER_VALIDATION_TITLE}
        subtitle={EAGER_VALIDATION_SUBTITLE}
      />

      <Form
        onInputChange={onInputChange}
        onSubmitClick={onSubmitClick}
        fields={formFields}
        submitText={submitText}
      />
    </div>
  );
};

export default NoValidationForm;
