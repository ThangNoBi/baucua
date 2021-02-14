import React from "react";
import { useDispatch, useSelector } from "react-redux";
import XucXacKQ from "./XucXacKQ";

export default function DSKetQua(props) {
  const ketQua = useSelector((state) => state.bauCua.ketQuaCuoc);

  const dispatch = useDispatch();

  return (
    <div className="mt-5">
      <div
        className="bg-info"
        style={{
          width: 350,
          height: 350,
          borderRadius: "50%",
          marginTop: 150,
          marginLeft: 80,
        }}
      >
        <div className="row">
          <div
            className="col-12 text-center"
            style={{ marginTop: 0, marginLeft: 120 }}
          >
            <XucXacKQ XucXacItem={ketQua[0]} />
          </div>
        </div>
        <div className="row">
          <div className="col-6 text-center" style={{ paddingLeft: 50 }}>
            <XucXacKQ XucXacItem={ketQua[1]} />
          </div>
          <div className="col-6" style={{ paddingLeft: 50 }}>
            <XucXacKQ XucXacItem={ketQua[2]} />
          </div>
        </div>
      </div>
      <div className="mt-4" style={{ marginLeft: 230 }}>
        <button
          className="btn btn-primary p-2"
          onClick={() => {
            dispatch({
              type: "LAC_BAU_CUA",
            });
          }}
        >
          LẮC
        </button>
      </div>
    </div>
  );
}
