import { mdiDeleteEmpty } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";

const DeleteIcon = (newSize) => {
  const [btnInfo, setBtnInfo] = useState({
    path: mdiDeleteEmpty,
    color: "rgb(235, 55, 35)",
    size: 1,
  });

  const { path, color, size } = btnInfo;

  if (btnInfo.newSize) {
    return (
      <Icon path={path} size={newSize} color={color} className="deleteIcon" />
    );
  } else {
    return (
      <Icon path={path} size={size} color={color} className="deleteIcon" />
    );
  }
};

export default DeleteIcon;
