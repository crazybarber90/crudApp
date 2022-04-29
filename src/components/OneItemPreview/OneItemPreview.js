import OneItemPreviewStyle from "./style";
import Button from "../parts/Button";

const OneItemPreview = (props) => {
  return (
    <OneItemPreviewStyle>
      <Button
        buttonTitle="Back"
        buttonOnSubmit={() => props.setOneItemPreview(!props.oneItemPreview)}
      />
      <h1 className="title">{props.oneItemData.title}</h1>
      <p className="date">{props.oneItemData.date}</p>
    </OneItemPreviewStyle>
  );
};

export default OneItemPreview;
