import OneItemPreviewStyle from "./style";
import Button from "../parts/Button";

const OneItemPreview = (props) => {
  const closeItemPreview = () => {
    //TREBA VRATITI SA ONE ITEM PREVIEW NA 4 ITEMA SA PREDHODNE STRANE
  };

  return (
    <OneItemPreviewStyle>
      <Button buttonTitle="Back" buttonOnSubmit={closeItemPreview()} />

      <h1 className="title">Blue Article</h1>
      <p className="date">25.06.1991 17:25</p>
    </OneItemPreviewStyle>
  );
};

export default OneItemPreview;
