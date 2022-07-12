import { mdiMinus } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";

const MinusIcon = (newSize) => {
  const [btnInfo, setBtnInfo] = useState({
    path: mdiMinus,
    color: "rgb(235, 55, 35)",
    size: 1,
  });

  const { path, color, size } = btnInfo;

  if (btnInfo.newSize) {
    return (
      <Icon path={path} size={newSize} color={color} className="MinusIcon" />
    );
  } else {
    return <Icon path={path} size={size} color={color} className="MinusIcon" />;
  }
};

export default MinusIcon;
