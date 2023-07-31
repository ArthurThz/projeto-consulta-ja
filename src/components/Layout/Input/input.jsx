import "./input.styles.scss";

const Input = ({ name, type, onChange }) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{name}</label>
      <input name={name} id={name} onChange={onChange} type={type} />
    </div>
  );
};

export default Input;
