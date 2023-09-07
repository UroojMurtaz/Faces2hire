import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import HeaderTop from "../Components/Header";
import AppFooter from "../Components/Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function AppShellDemo({ loginPage }) {
  const theme = useMantineTheme();
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const footerContent = isLogin ? "" : <AppFooter />;
  return (
    <AppShell footer={footerContent} header={<HeaderTop />}>
      <Outlet />
    </AppShell>
  );
}
