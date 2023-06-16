import {
  Center,
  Container,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import Logo from "../../logo.svg";
import { useStyles } from "./styles";

const index = () => {
  const { classes } = useStyles();
  return (
    // <Flex bg={"#37496F"}>
    <Stack bg={"#37496F"} p={"60px"} align="center" justify="center">
      <Group>
        <img src={Logo} />
        <Divider size="sm" orientation="vertical" />
      </Group>
      <Group
        align={"center"}
        gap={"md"}
        fz={"xl"}
        color="white"
        style={{ gap: "20px" }}
        mt={"30px"}
      >
        <Text className={classes.text}>Home</Text>
        <Divider size="md" orientation="vertical" style={{ height: "25px" }} />
        <Text className={classes.text}>Search Job</Text>
        <Divider size="md" orientation="vertical" style={{ height: "25px" }} />
        <Text className={classes.text}>Connections</Text>
        <Divider size="md" orientation="vertical" style={{ height: "25px" }} />
        <Text className={classes.text}>Contact</Text>
        <Divider size="md" orientation="vertical" style={{ height: "25px" }} />
        <Text className={classes.text}>About</Text>
      </Group>

      <Center maw={800} h={100} mx="auto">
        <Text
          className={classes.text}
          align="center"
          justify={"center"}
          p={"xl"}
          fz={"17px"}
        >
          There was a time when people got a job right out of school and stuck
          with it until they retired. Those days are gone for good.There was a
          time when people got a job.
        </Text>
      </Center>
      <Group>
        <Text className={classes.text} fz={"19px"}>
          Terms and Conditions
        </Text>
        <Text className={classes.text} fz={"19px"}>
          Privacy Policy
        </Text>
      </Group>
    </Stack>

    // </Flex>
  );
};

export default index;
