import * as React from "react";
import { Reveal, RevealProps } from "./Reveal";

export function SlideLeft(props: Omit<RevealProps, "animation">) {
  return <Reveal animation="slide-left" {...props} />;
}
