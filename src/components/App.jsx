import React from "react";
import fedex from "../Images/fedex.png";
import copy from "../Images/copy.png";
import residential from "../Images/residential.png";
import edit from "../Images/edit.png";
import leftArrow from "../Images/leftArrow.png";
import Button from "./common/Button";
import Divider from "./common/Divider";
import TextBlock from "./common/TextBlock";

export default function App() {
  return (
    <div className="container">
      <Button type="image" className="leftArrow" imageSrc={leftArrow} alt="left arrow" />
      <div>
        <div className="title">
          <TextBlock type="title-only" title="Delivery# 487303" />
          <div className="status">Pending</div>
        </div>
        <div className="adspace">Ad Space</div>
        <Divider />
      </div>
      <div>
        <TextBlock
          type="title-with-sub"
          className="detail"
          subClassName="time"
          title="Delivery Details"
          subtitle="Delivery time: 2023-10-17 17:05:54"
        />
        <div className="fedexWrapper">
          <img src={fedex} alt="fedex" />
          <div className="fedexWrapperRight">
            <TextBlock
              type="title-with-sub"
              className="from"
              subClassName="fromSub"
              title="Delivery from Fedex"
              subtitle="Bluebits Office Metrotown"
              addition="4289 Kingsway, Burnaby, BC, Canada, V6B0C8"
            />
          </div>
        </div>
        <div>
          <div className="deliveryDetailWrapper">
            <TextBlock
              type="title-with-blue"
              className="pickupCodeTitle"
              subClassName="pickupCodeSub"
              title="Compartment"
              subtitle="104"
            />
            <TextBlock
              type="title-with-image"
              className="pickupCodeTitle"
              subClassName="pickupCodeSub"
              title="Pick-up Code"
              subtitle="288-234-123"
              imageSrc={copy}
              altText="copy icon"
            />
          </div>
          <div className="unlockBtnWrapper">
            <Button type="text" className="unlockBtn" text="Unlock Compartment" />
          </div>
          <Divider />
        </div>
      </div>
      <div>
        <Button
          type="text-image"
          className="residentialUnit"
          firstSubClassName="bottomBtnTitle"
          secondSubClassName="bottomBtnSub"
          text="Residential Unit Registration"
          subText="Register your unit with BlueBox to enable
              delivery by unit feature."
          imageSrc={residential}
          altText="residential unit registration"
        />
        <Button
          type="text-image"
          className="supportTicket"
          firstSubClassName="bottomBtnTitle"
          secondSubClassName="bottomBtnSub"
          text="Create a support ticket"
          subText="Submit a support ticket form to us."
          imageSrc={edit}
          altText="support ticket"
        />
      </div>
    </div>
  );
}
