import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";
export const AppTheme = ({ children }: { children: JSX.Element }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
