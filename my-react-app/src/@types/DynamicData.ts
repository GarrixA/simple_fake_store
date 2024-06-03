import { ReactNode } from "react";

export interface PropsWithChildren {
  children: ReactNode;
}

export type CounterState = {
  value: number
}