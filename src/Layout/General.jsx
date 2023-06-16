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
import { Outlet } from "react-router-dom";

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      // styles={{
      //   main: {
      //     background:
      //       theme.colorScheme === "dark"
      //         ? theme.colors.dark[8]
      //         : theme.colors.gray[0],
      //   },
      // }}
      footer={
        // <Footer height={90} p="md"  bg={"#37496F"} fixed={false}>
        <AppFooter />
        // </Footer>
      }
      header={<HeaderTop />}
    >
      <Outlet />
    </AppShell>
  );
}
