import { Container } from "./styles";

const Button = ({ onClick, label, variant = "primary" }) => {
  return (
    <Container variant={variant} onClick={onClick}>
      {label}
    </Container>
  );
};

export default Button;
