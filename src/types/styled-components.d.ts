import { lightTheme } from "../components/ui/theme";

type ThemeInterface = typeof lightTheme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends ThemeInterface {}
}
