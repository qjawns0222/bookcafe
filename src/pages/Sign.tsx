import React from "react";

import { Redirect } from "react-router-dom";
import SignContainer from "../containers/Signcontainer";
import UseToken from "../hooks/UseToken";

export default function Sign() {
  const token = UseToken();
  if (token !== null) {
    return <Redirect to="/" />;
  }
  return <SignContainer />;
}
