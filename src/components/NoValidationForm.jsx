import { useState } from "react";
import PageHeader from "./PageHeader";
import Form from "./Form";
import { baseForm } from "../constants/initialForm";
import { UI_STRINGS } from "../constants/appStrings";
import { updateFormField } from "../helpers/form";
import { FORM_SUBMIT_MOCK_WAIT } from "../constants/timeouts";
const { SUBMIT, LOADING, NO_VALIDATION_TITLE, NO_VALIDATION_SUBTITLE } =
  UI_STRINGS;

const NoValidationForm = () => {
  const [formFields, setFormFields] = useState(baseForm);
  const [submitText, setSubmitText] = useState(SUBMIT);

  /**
   * Notice how this event handler has ZERO validation!
   */
  const onSubmitClick = () => {
    setSubmitText(LOADING);

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
        title={NO_VALIDATION_TITLE}
        subtitle={NO_VALIDATION_SUBTITLE}
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
