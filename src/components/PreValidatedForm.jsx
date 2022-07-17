import { useState, useEffect } from "react";
import PageHeader from "./PageHeader";
import Form from "./Form";
import { baseForm } from "../constants/initialForm";
import { UI_STRINGS } from "../constants/appStrings";
import { updateFormField } from "../helpers/form";
import { FORM_SUBMIT_MOCK_WAIT } from "../constants/timeouts";
const { SUBMIT, LOADING, PRE_VALIDATED_SUBTITLE, PRE_VALIDATED_TITLE } =
  UI_STRINGS;

const NoValidationForm = () => {
  const [formFields, setFormFields] = useState(baseForm);
  const [submitText, setSubmitText] = useState(SUBMIT);

  useEffect(() => {
    validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validateForm = () => {
    const tempFormFields = [...formFields];
    tempFormFields.forEach((field) => {
      const validationMessages = field.validate();
      field.validationMessage = validationMessages[0];
    });

    setFormFields(tempFormFields);
  };

  /**
   * We should also validate on submit
   */
  const onSubmitClick = () => {
    setSubmitText(LOADING);
    validateForm();

    setTimeout(() => {
      setSubmitText(SUBMIT);
    }, FORM_SUBMIT_MOCK_WAIT);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = updateFormField(formFields, name, value);
    setFormFields(updatedForm);
  };

  return (
    <div>
      <PageHeader
        title={PRE_VALIDATED_TITLE}
        subtitle={PRE_VALIDATED_SUBTITLE}
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
