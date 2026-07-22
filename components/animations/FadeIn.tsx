import * as React from "react";
import { Reveal, RevealProps } from "./Reveal";

export function FadeIn(props: Omit<RevealProps, "animation">) {
  return <Reveal animation="fade" {...props} />;
}
