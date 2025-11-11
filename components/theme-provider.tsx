"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// @note wraps the app with next-themes provider for theme management
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
