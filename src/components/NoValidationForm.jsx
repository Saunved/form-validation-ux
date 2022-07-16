const NoValidationForm = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Form with no validation</h1>
      <p>
        No validation is the worst form of validation. If your users don't know
        what went wrong, how will they fix it?
      </p>

      <div className="flex justify-center">
        <form className="shadow-lg p-8 border rounded mt-4">
          <div>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input name="email" type="text" />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" />
          </div>

          <div className="flex justify-center">
            <button className="shadow hover:shadow-none bg-blue-600 text-white px-4 py-2 rounded text-sm">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoValidationForm;
