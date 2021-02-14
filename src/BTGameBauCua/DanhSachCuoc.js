import React from "react";
import { useSelector } from "react-redux";
import DSQuanCuoc from "./DSQuanCuoc";

export default function DanhSachCuoc(props) {
  //Dùng Hook useSelector lấy state từ Redux về
  const dsCuoc = useSelector((state) => state.bauCua.danhSachCuoc);

  // console.log("get DSCUOC", dsCuoc);

  const renderQuanCuoc = () => {
    return dsCuoc.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <DSQuanCuoc quanCuoc={item} />
        </div>
      );
    });
  };

  return <div className="row m-5">{renderQuanCuoc()}</div>;
}
