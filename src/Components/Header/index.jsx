import { Flex, Group, Burger, Menu } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Logo from "../../logo.svg";
import { useStyles } from "./style";
import Button from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
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
      <img
        src={Logo}
        alt="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
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
                  label={"Login"}
                  size={isTablet ? "sm" : "md"}
                  onClick={() => navigate("/login")}
                />
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </>
      ) : (
        <>
          <Group align={"center"} gap={"md"} fz={isTablet ? "lg" : "xl"}>
            <ul className={classes.headlist}>
              <li>Search Job</li>
              <li>Analytics</li>
              <li>Connections</li>
              <li>My Prospective Projects</li>
              <li>About Us</li>
            </ul>
          </Group>
          <Button
            label={"Login"}
            size={isTablet ? "sm" : "md"}
            onClick={() => navigate("/login")}
          />
        </>
      )}
    </Flex>
  );
};

export default Index;
