import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CssBaseline } from "@mui/material";

// import { darkTheme, lightTheme } from "@/constants/theme";
import ThemeContextProvider, { useTheme } from "@/store/themeContextProvider";
import { MyThemeProvider } from "@/provider/themeProvider";
import { ClientProvider } from "@/provider/queryClientProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
// const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProvider>
      <ThemeContextProvider>
        <MyThemeProvider>
          <CssBaseline />

          <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
              {children}
            </body>
          </html>
        </MyThemeProvider>
      </ThemeContextProvider>
    </ClientProvider>
  );
}
