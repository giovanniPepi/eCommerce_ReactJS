import { mdiCart } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";

const CartIcon = (newSize) => {
  const [btnInfo, setBtnInfo] = useState({
    path: mdiCart,
    color: "rgb(255, 101, 0)",
    size: 1,
  });

  const { path, color, size } = btnInfo;

  if (btnInfo.newSize) {
    return (
      <Icon path={path} size={newSize} color={color} className="cartIcon" />
    );
  } else {
    return <Icon path={path} size={size} color={color} className="cartIcon" />;
  }
};

export default CartIcon;
