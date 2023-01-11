import React from "react";
import "./SectionThree.css";
import arrowRight from "../../images/arrow-right.svg";
import Button from "../Common/Button";
import logoOne from "../../images/logo-one.svg";
import logoTwo from "../../images/logo-two.svg";
import logoThree from "../../images/logo-three.svg";

const SectionThree = () => {
  return (
    <div className="container-fluid section-three">
      <div className="">
        <Button text="今すぐ無料で登録する" />
        <h1 className="text-center section-three-heading">
          あの有名企業のハイクラス求人多数
        </h1>
        <div className="logos mx-auto">
          <div className="logo">
            <img src={logoOne} />
          </div>
          <div className="logo logo-two">
            <img src={logoTwo} />
          </div>
          <div className="logo">
            <img src={logoThree} />
          </div>
        </div>
        <div className="polygons">
          <div className="polygon polygon-white">楽天 グループ</div>
          <div className="polygon polygon-blue">楽天 グループ</div>
          <div className="polygon polygon-white">楽天 グループ</div>
          <div className="polygon polygon-blue">楽天 グループ</div>
        </div>
        <div className="text-group mx-auto">
          <p>※掲載の企業例はあくまで一例です</p>
          <p>※採用の時期によっては、募集を終了する事があります</p>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
