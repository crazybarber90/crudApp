import OneItemEditStyle from "./style";
import close from "../../images/close.png";
import Input from "../parts/Input";
import { useState } from "react";

const OneItemEdit = (props) => {
  const [updatedData, setUpdatedData] = useState({
    id: props.id,
    title: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleDataUpdate = () => {
    // let newData = { ...allData };
    // props.setAllData([...props.allData, ...updatedData]);
  };

  console.log("updatedData", updatedData);
  return (
    <OneItemEditStyle>
      <img
        src={close}
        onClick={() => props.setShowOneItemEdit(!props.showOneItemEdit)}
      />

      <h1 className="title">Edit: {props.title}</h1>
      <Input
        name="title"
        fieldType="text"
        fieldPlaceholder="Edit Title"
        fieldOnChange={handleInputChange}
        value={props.title && props.title}
      />

      <Input
        name="date"
        fieldType="text"
        fieldPlaceholder="Edit Date"
        fieldOnChange={handleInputChange}
        value={props.date && props.date}
      />

      <button
        onClick={() => {
          handleDataUpdate();
          props.setShowOneItemEdit(!props.showOneItemEdit);
        }}
      >
        Update
      </button>
    </OneItemEditStyle>
  );
};

export default OneItemEdit;
