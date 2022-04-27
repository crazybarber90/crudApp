import TextAreaStyle from "./style";

const TextArea = (props) => {
  return (
    <TextAreaStyle>
      <textarea
        className="textarea"
        // type={props.fieldType}
        placeholder={props.fieldPlaceholder}
        onChange={props.fieldOnChange}
      />
    </TextAreaStyle>
  );
};

export default TextArea;
