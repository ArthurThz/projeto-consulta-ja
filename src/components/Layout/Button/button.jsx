import "./button.styles.scss";

const Button = ({ children, type }) => {
  return <button type={type}>{children}</button>;
};

export default Button;
