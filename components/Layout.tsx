import React from "react";
import Navbar from "./Navbar/Navbar";

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
