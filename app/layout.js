import Footer from "./Footer/footer";
import "./globals.css";
import Header from "./Header/header";
import ThemeinProvider from "@/theme/ThemeProvider";

export const metadata = {
  title: "Yatin Chaudhari",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <ThemeinProvider>
          <Header />
          {children}
          <Footer />
        </ThemeinProvider>
      </body>
    </html>
  );
}
