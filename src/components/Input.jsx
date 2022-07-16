const Input = ({
  name,
  label,
  type,
  value = "",
  onInputChange,
  onInputBlur = null,
  validationMessage,
  fieldClasses,
  isRequired,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onInputChange}
        onBlur={onInputBlur}
        name={name}
        type={type}
        value={value}
        className={fieldClasses}
        required={!!isRequired}
      />
      <p className="text-red-500 text-sm">{validationMessage}</p>
    </div>
  );
};

export default Input;
