import TextAreaStyle from "./style";

const TextArea = (props) => {
  return (
    <TextAreaStyle>
      <textarea
        className="textarea"
        type={props.fieldType}
        placeholder={props.fieldPlaceholder}
      />
    </TextAreaStyle>
  );
};

export default TextArea;
