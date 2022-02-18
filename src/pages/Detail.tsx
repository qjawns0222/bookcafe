import React from "react";
import { Redirect } from "react-router-dom";
import UseToken from "../hooks/UseToken";
import Detailcontainer from "../containers/Detailcontainer";
export default function Detail() {
  const token = UseToken();
  if (token === null) {
    return <Redirect to="/sign" />;
  }
  return (
    <div>
      <Detailcontainer />
    </div>
  );
}
