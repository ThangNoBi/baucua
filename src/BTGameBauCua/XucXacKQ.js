import React from "react";
import { animated, useSpring } from "react-spring";

export default function XucXacKQ(props) {
  const getKQ = props.XucXacItem;

  const [propSpring, set] = useSpring(() => {
    return {
      to: {
        xoay: [360, 360, 360],
      },
      from: {
        xoay: [180, 180, 180],
      },
      config: {
        duration: 500,
      },
      reset: true,
    };
  });

  set({ xoay: [0, 0, 0] });

  return (
    <>
      <div className="scene">
        <animated.div
          className="cube"
          style={{
            transform: propSpring.xoay.interpolate(
              (x, y, z) =>
                `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
            ),
          }}
        >
          <div className="cube__face front">
            <img src={getKQ.hinhAnh} style={{ width: 50 }} />
          </div>
          <div className="cube__face back">
            <img src="./imgBauCua/BTBauCua/nai.png" style={{ width: "100%" }} />
          </div>
          <div className="cube__face top">
            <img src="./imgBauCua/BTBauCua/ca.png" style={{ width: "100%" }} />
          </div>
          <div className="cube__face bottom">
            <img src="./imgBauCua/BTBauCua/tom.png" style={{ width: "100%" }} />
          </div>
          <div className="cube__face left">
            <img src="./imgBauCua/BTBauCua/ga.png" style={{ width: "100%" }} />
          </div>
          <div className="cube__face right">
            <img src="./imgBauCua/BTBauCua/cua.png" style={{ width: "100%" }} />
          </div>
        </animated.div>
      </div>
    </>
  );
}
