import React from "react";
import B1 from "@/app/B1";
import B2 from "@/app/B2";
import Login from "@/app/FormLogin/Login";
import Register from "@/app/FromRegister/Register";
import Popup from "@/app/Popup/Popup";
import Navigation from "@/app/Navigation/Navigation";
import BaseButton from "./BaseButton/BaseButton";
import Pagination from "./Pagination/Pagination";
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
      B5: <Popup></Popup>
      <br />
      B6: <Navigation></Navigation>
      <br />
      B7: <BaseButton></BaseButton>
      <br />
      B8: <Pagination></Pagination>
    </div>
  );
}
