import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-xl-6">
          <h1>RECRUIT DIRECT SCOUT</h1>
          <p>リクルートダイレクトスカウト</p>
        </div>
        <div className="col-6 col-xl-6">
          <p>ログイン</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
