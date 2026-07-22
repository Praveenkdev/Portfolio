import * as React from "react";
import { Reveal, RevealProps } from "./Reveal";

export function SlideUp(props: Omit<RevealProps, "animation">) {
  return <Reveal animation="slide-up" {...props} />;
}
