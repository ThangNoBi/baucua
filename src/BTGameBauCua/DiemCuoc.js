import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DiemCuoc(props) {
  const getDiem = useSelector((state) => state.bauCua.tongDiem);

  const dispatch = useDispatch();

  return (
    <div>
      <h3 className="text-center" style={{ fontSize: 50, color: "#3366FF" }}>
        Bài Tập Game Bầu Cua
      </h3>
      <div className="text-center mt-5">
        <span
          className="bg-danger text-white p-3"
          style={{ fontSize: 25, borderRadius: 20 }}
        >
          Tiền Thưởng :{" "}
          <span className="text-warning">${getDiem.toLocaleString()}</span>
        </span>
      </div>
      <div className="text-center mt-5">
        <button
          className="btn btn-success"
          style={{ borderRadius: 20 }}
          onClick={() => {
            dispatch({
              type: "CHOI_LAI",
            });
          }}
        >
          Chơi lại
        </button>
      </div>
    </div>
  );
}
