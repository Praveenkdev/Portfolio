import * as React from "react";
import { Reveal, RevealProps } from "./Reveal";

export function SlideRight(props: Omit<RevealProps, "animation">) {
  return <Reveal animation="slide-right" {...props} />;
}
