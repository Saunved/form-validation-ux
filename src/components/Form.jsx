import Input from "./Input";

const DEFAULT_SUBMIT_CLASSES =
  "shadow hover:shadow-none bg-blue-600 text-white px-4 py-2 rounded text-sm";

const getSubmitButtonClasses = (classesFromProps) => {
  if (!classesFromProps) {
    return DEFAULT_SUBMIT_CLASSES;
  }

  return classesFromProps;
};

const Form = ({
  fields,
  onInputChange,
  onInputBlur,
  onSubmitClick,
  submitText,
  submitButtonClasses,
}) => {
  const _submitButtonClasses = getSubmitButtonClasses(submitButtonClasses);

  return (
    <div className="flex justify-center">
      <form
        className="shadow-lg p-8 border rounded mt-4"
        onSubmit={(e) => e.preventDefault()}
      >
        {fields.map((field) => {
          return (
            <Input
              key={field.name}
              onInputChange={onInputChange}
              onInputBlur={onInputBlur}
              {...field}
            />
          );
        })}

        <div className="flex justify-center">
          <button onClick={onSubmitClick} className={_submitButtonClasses}>
            {submitText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
