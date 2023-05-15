import "./input.styles.scss";

const Input = ({ name, type }) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{name}</label>
      <input type={type} />
    </div>
  );
};

export default Input;
