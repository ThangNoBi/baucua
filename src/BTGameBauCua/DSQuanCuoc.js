import React from "react";
import { useDispatch } from "react-redux";
import { animated, useSpring } from "react-spring";

export default function DSQuanCuoc(props) {
  //Khai báo dispatch lên Reducer bằng Hook
  const dispatch = useDispatch();

  const qc = props.quanCuoc;

  const [propSpringTru, setTru] = useSpring(() => {
    return { to: { xikeo: 0.75 }, from: { xikeo: 0.5 }, reset: true };
  });

  const [propSpringCong, setCong] = useSpring(() => {
    return { to: { xikeo: 0.75 }, from: { xikeo: 0.5 }, reset: true };
  });

  return (
    <div className="mt-3">
      <img src={qc.hinhAnh} style={{ width: "250px" }} />
      <div
        className="text-center bg-info mt-3"
        style={{ borderRadius: 20, width: 250 }}
      >
        <animated.button
          className="btn btn-primary btn--tang--giam"
          style={{
            transform: propSpringTru.xikeo.interpolate(
              (keo) => `scale(${keo})`
            ),
          }}
          onClick={() => {
            //Xử lý set hiệu ứng của UseSpring
            setTru({ scale: 0 });
            setTru({ scale: 0 });

            dispatch({
              type: "DAT_CUOC",
              payload: qc,
              tangGiam: false,
            });
          }}
        >
          <i className="fa fa-minus" style={{ fontSize: 20 }}></i>
        </animated.button>
        <span className="mx-3 text-warning" style={{ fontSize: 20 }}>
          {qc.diemCuoc}
        </span>
        <animated.button
          className="btn btn-primary btn--tang--giam"
          style={{
            transform: propSpringCong.xikeo.interpolate(
              (keo) => `scale(${keo})`
            ),
          }}
          onClick={() => {
            //Xử lý set hiệu ứng của UseSpring
            setCong({ scale: 0 });
            setCong({ scale: 0 });

            dispatch({
              type: "DAT_CUOC",
              payload: qc,
              tangGiam: true,
            });
          }}
        >
          <i className="fa fa-plus" style={{ fontSize: 20 }}></i>
        </animated.button>
      </div>
    </div>
  );
}
