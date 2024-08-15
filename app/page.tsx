import React from "react";
import B1 from "@/app/B1";
import B2 from "@/app/B2";
import Login from "@/app/FormLogin/Login";
import Register from "@/app/FromRegister/Register";
import Popup from "@/app/Popup/Popup";
import Navigation from "@/app/Navigation/Navigation";
import BaseButton from "./BaseButton/BaseButton";
import Pagination from "./Pagination/Pagination";
import B9 from "@/app/B9";
import Base from "./B10/Base";
export default function page() {
  return (
    <div>
      B1:<B1></B1>
      <br />
      B2:<B2></B2>
      <br />
      B3:<Login></Login>
      <br />
      B4:<Register></Register>
      <br />
      {/* B5: <Popup></Popup> */}
      <br />
      B6: <Navigation></Navigation>
      <br />
      B7: <BaseButton></BaseButton>
      <br />
      B8: <Pagination></Pagination>
      <br />
      B9: <B9></B9>
      <br />
      B10:{" "}
      <Base
        content="Áo phao nóng bức"
        title="Áo phao"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaoCJqiqE5GQBt7OE2ZHfJcieDox2nb02-A&s"
        type="primary"
      ></Base>
    </div>
  );
}
