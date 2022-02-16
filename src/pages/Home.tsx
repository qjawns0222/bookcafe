import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../types";

import BookContainer from "../containers/BookContainer";
export default function Home() {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );
  if (token === null) {
    return <Redirect to="/sign" />;
  }
  return (
    <div>
      <h1>
        <BookContainer />
      </h1>
    </div>
  );
}
