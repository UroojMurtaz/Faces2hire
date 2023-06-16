import {
  Container,
  Flex,
  Drawer,
  Group,
  Burger,
  Menu,
  Divider,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Logo from "../../logo.svg";
import { useStyles } from "./style";
import Button from "../Button";
import { useState } from "react";

const Index = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 800px)");
  const isTablet = useMediaQuery("(max-width: 1150px)");
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <Flex
      direction={"row"}
      justify={"space-between"}
      align={"center"}
      pr={"xl"}
      pl={"xl"}
      p={"sm"}
      bg={"#37496F"}
    >
      <img src={Logo} alt="logo" />
      {isMobile ? (
        <>
          <Menu shadow="md" width={"100%"}>
            <Menu.Target>
              <Burger
                opened={isMenuOpen}
                // onClick={() => toggleOpened()}
                className={classes.burger}
                size="lg"
                color="white"
              />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item fz={"lg"}>Search Job</Menu.Item>
              <Menu.Divider />
              <Menu.Item fz={"lg"}>Analytics</Menu.Item>
              <Menu.Divider />
              <Menu.Item fz={"lg"}>Connections</Menu.Item>
              <Menu.Divider />
              <Menu.Item fz={"lg"}>My Prospective Projects</Menu.Item>
              <Menu.Divider />
              <Menu.Item fz={"lg"}>About Us</Menu.Item>
              <Menu.Divider />
              <Menu.Item>
                <Button
                  label={"Post Job For Free"}
                  size={isTablet ? "sm" : "md"}
                />
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </>
      ) : (
        <Group align={"center"} gap={"md"} fz={isTablet ? "lg" : "xl"}>
          <ul className={classes.headlist}>
            <li>Search Job</li>
            <li>Analytics</li>
            <li>Connections</li>
            <li>My Prospective Projects</li>
            <li>About Us</li>
          </ul>
          <Button label={"Post Job For Free"} size={isTablet ? "sm" : "md"} />
        </Group>
      )}
    </Flex>
  );
};

export default Index;
