import { InputContainer, InputStyled, LabelStyled } from "./styles";

const Input = ({ name, type, onChange }) => {
  return (
    <InputContainer>
      <LabelStyled htmlFor={name}>{name}</LabelStyled>
      <InputStyled name={name} id={name} onChange={onChange} type={type} />
    </InputContainer>
  );
};

export default Input;
