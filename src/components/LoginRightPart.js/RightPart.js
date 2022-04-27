import RightPartStyle from "./style";
const RightPart = (props) => {
  return (
    <RightPartStyle>
      {/* <div className="rightPart"> */}
      <h3>Name : {props.name}</h3>
      <h3>Email : {props.email}</h3>
      <h3>Question : {props.textArea}</h3>

      <h2>Thank you for contacting us</h2>
      {/* </div> */}
    </RightPartStyle>
  );
};

export default RightPart;
