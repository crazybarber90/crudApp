import ButtonStyle from "./style";

const Button = (props) => {
  return (
    <ButtonStyle>
      <button
        className="button"
        onClick={(e) => props.buttonOnSubmit(e)}
        setIsVisible={props.setIsVisible}
        setIsLoggedIn={props.setIsLoggedIn}
        type={props.type}
      >
        {props.buttonTitle}
      </button>
    </ButtonStyle>
  );
};

export default Button;
