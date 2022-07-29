type SummaryValidationProps = {
  errors: string[];
};

const SummaryValidation = ({ errors }: SummaryValidationProps) => {
  if (!errors.length) return <></>;
  const errList = errors.map((e) => <li key={e}>{e}</li>);

  return (
    <div className="error-msg">
      <ul>{errList}</ul>
    </div>
  );
};
export default SummaryValidation;
