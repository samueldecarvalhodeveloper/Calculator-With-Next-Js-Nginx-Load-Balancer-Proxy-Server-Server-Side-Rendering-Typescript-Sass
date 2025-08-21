import { JSX, ReactNode } from "react";
import { Inter } from "next/font/google";
import "./styles.scss";
import Provider from "../components/provider/provider";

const inter = Inter({ subsets: ["latin"] });

function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}

export default Layout;
