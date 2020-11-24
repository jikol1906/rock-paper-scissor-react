// theme.ts
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    rockGradient: string;
    scissorGradient: string;
    paperGradient:string;
  }
}



export const darkTheme: DefaultTheme = {
	rockGradient: "linear-gradient(to bottom, hsl(349, 71%, 52%),hsl(349, 70%, 56%))",
  scissorGradient: "linear-gradient(to bottom, hsl(39, 89%, 49%),hsl(40, 84%, 53%))",
  paperGradient: "linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))"
};