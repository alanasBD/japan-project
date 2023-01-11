import React from "react";
import "./SectionFive.css";
import Button from "../Common/Button";
const SectionFive = () => {
  return (
    <div className="container-fluid section-five">
      <h1 className="text-center">リクルートダイレクトスカウト</h1>
      <h1 className="text-center">-3つの強み-</h1>
      <div className="section-five-inner border border-primary mx-auto">
        <h1 className="text-center">年収800～2,000万円のハイクラス求人多数</h1>
        <h1 className="text-center">- 牽菇内容 -</h1>

        <div className="container-fluid">
          <div className="d-flex justify-content-evenly section-five-cards">
            <div className="section-five-card">
              <h1>コンサルティング会社</h1>
              <p>＜戦降／IT コンサルタント＞</p>
              <hr />
              <div className="section-five-card-footer">
                <p>牽菇内容</p>
                <p>・DX領域、新規事業の課題解決</p>
                <p>・DX領域、新規事業の課題解決</p>
              </div>
            </div>
            <div className="section-five-card">
              <h1>コンサルティング会社</h1>
              <p>＜戦降／IT コンサルタント＞</p>
            </div>
            <div className="section-five-card">
              <h1>コンサルティング会社</h1>
              <p>＜戦降／IT コンサルタント＞</p>
            </div>
          </div>
        </div>
      </div>
      <Button text="今すぐ無料で登録する" />
    </div>
  );
};

export default SectionFive;
