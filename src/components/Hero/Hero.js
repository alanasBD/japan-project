import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container-fluid hero text-center">
      <div className="row">
        <h1 className="hero-heading mx-auto">年収800万~2,000万円の</h1>
        <h1 className="hero-sub-heading">ハイクラス転職</h1>
        <p className="scout">Recruit direct scout</p>

        <div className="hero-inner mx-auto">
          <p className="hero-inner-heading">転職後の平均年収</p>
          <h1 className="price">938</h1>
          <p className="hero-inner-text">
            ※2022 年 4 月時点、ハイキャリア会員のみ
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
