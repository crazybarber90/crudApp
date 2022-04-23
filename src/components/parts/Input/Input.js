import inputStyle from "./style";

const Input = (props) => {
  return (
    <inputStyle>
      <input
        className="input"
        style={{ margin: "10px 0", padding: "10px" }} //MALO INLINE STYLE AKO JE NEGDE POTREBNO :)
        type={props.fieldType}
        placeholder={props.fieldPlaceholder}
        onChange={props.fieldOnChange}
      />
    </inputStyle>
  );
};

export default Input;
