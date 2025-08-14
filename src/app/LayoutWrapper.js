// app/components/LayoutWrapper.jsx
"use client";

import { usePathname } from "next/navigation";
import Header from "./components/Header/Header.js";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const isAuthPage = pathname === "/logian" || pathname === "/signsup" || pathname === "/";

  return (
    <>
      {!isAuthPage && <Header />}
      {children}
    </>
  );
}
