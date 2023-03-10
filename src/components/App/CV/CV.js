import { forwardRef } from "react";
import React from "react";
import LeftPane from "./LeftPane.js";
import RightPane from "./RightPane.js";

const CV = forwardRef(function CV(props, ref) {
  const { dataHistory } = props;
  return (
    <div className="CV shadowed" ref={ref}>
      <LeftPane dataHistory={dataHistory} />
      <RightPane dataHistory={dataHistory} />
    </div>
  );
});

export default CV;
