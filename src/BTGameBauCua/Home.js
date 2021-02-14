import React from "react";

import "./BauCua.css";
import DanhSachCuoc from "./DanhSachCuoc";
import DiemCuoc from "./DiemCuoc";
import DSKetQua from "./DSKetQua";

export default function Home() {
  return (
    <div id="BtGameBcua" className="container-fluid">
      <DiemCuoc />

      <div className="row">
        <div className="col-8">
          <DanhSachCuoc />
        </div>
        <div className="col-4">
          <DSKetQua />
        </div>
      </div>
    </div>
  );
}
