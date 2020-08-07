import React from "react";
import { StyledDeleteIcon } from "./style";

export function Icon({ type, handleClick }) {
  switch (type) {
    case "delete": {
      return (
        <StyledDeleteIcon onClick={handleClick}>
          <i className="fas fa-ban" />
        </StyledDeleteIcon>
      );
    }
    default:
      return <span />;
  }
}
