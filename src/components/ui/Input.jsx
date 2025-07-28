export default function Input({ label, name, error, ...rest }) {
  const id = rest.id || name;
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} name={name} {...rest} />
      {error && <small className="error">{error}</small>}
    </div>
  );
}