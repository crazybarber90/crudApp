import RightPartStyle from "./style";
const RightPart = (props) => {
  return (
    <RightPartStyle>
      <h3>Name : {props.loginData.name}</h3>
      <h3>Email : {props.loginData.email}</h3>
      <h3>Question : {props.loginData.textArea}</h3>

      <h2>Thank you for contacting us</h2>
    </RightPartStyle>
  );
};

export default RightPart;
