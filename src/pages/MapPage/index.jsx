import React from "react";
import GoogleMap from "./GoogleMap";
import { Mediator } from "./mediator";

export default function Page() {
  return (
    <>
      <Mediator />
      <GoogleMap />
    </>
  );
}
