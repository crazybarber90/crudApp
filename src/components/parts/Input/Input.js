import InputStyle from "./style";

const Input = (props) => {
  return (
    <InputStyle>
      <input
        className="input"
        style={{ margin: "10px 0", padding: "10px" }} //inline style
        type={props.fieldType}
        placeholder={props.fieldPlaceholder}
        onChange={props.fieldOnChange}
        name={props.name}
        defaultValue={props.value}
      />
    </InputStyle>
  );
};

export default Input;
