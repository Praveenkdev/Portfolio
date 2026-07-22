import * as React from "react";
import { Reveal, RevealProps } from "./Reveal";

export function ScaleIn(props: Omit<RevealProps, "animation">) {
  return <Reveal animation="scale-in" {...props} />;
}
