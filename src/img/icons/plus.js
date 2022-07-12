import { mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";

const AddIcon = (newSize) => {
  const [btnInfo, setBtnInfo] = useState({
    path: mdiPlus,
    color: "rgb(31, 144, 80)",
    size: 1,
  });

  const { path, color, size } = btnInfo;

  if (btnInfo.newSize) {
    return (
      <Icon path={path} size={newSize} color={color} className="AddIcon" />
    );
  } else {
    return <Icon path={path} size={size} color={color} className="AddIcon" />;
  }
};

export default AddIcon;
