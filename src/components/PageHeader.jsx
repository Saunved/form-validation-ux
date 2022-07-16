const PageHeader = ({ title, subtitle }) => {
  return (
    <header className="text-center my-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};

export default PageHeader;
