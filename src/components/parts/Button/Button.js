import ButtonStyle from "./style";

const Button = (props) => {
  return (
    <ButtonStyle>
      <button className="button" onClick={props.buttonOnSubmit}>
        {props.buttonTitle}
      </button>
    </ButtonStyle>
  );
};

export default Button;
