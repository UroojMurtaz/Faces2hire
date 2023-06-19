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
import { useMediaQuery } from "@mantine/hooks";

const index = () => {
  const { classes } = useStyles();
  const isMobile=useMediaQuery("(max-width:600px)")
  return (
    // <Flex bg={"#37496F"}>
    <Stack bg={"#37496F"} p={"60px"} align="center" justify="center">
      <Group>
        <img src={Logo} />
        <Divider size="sm" orientation="vertical" />
      </Group>
      <Group
        align={isMobile?"start":"center"}
        gap={"md"}
        fz={"xl"}
        color="white"
        style={{ gap: isMobile?"10px":"20px" }}
        mt={"30px"}
        
      >
        <Text className={classes.text} fz={isMobile?"15px":"19px"}>Home</Text>
        <Divider size="md" orientation="vertical" style={{ height: "25px" }} />
        <Text className={classes.text} fz={isMobile?"15px":"19px"}>Search Job</Text>
        <Divider size="md" orientation="vertical" style={{ height: "25px" }} />
        <Text className={classes.text} fz={isMobile?"15px":"19px"}>Connections</Text>
        <Divider size="md" orientation="vertical" style={{ height: "25px" }} />
        <Text className={classes.text} fz={isMobile?"15px":"19px"}>Contact</Text>
        <Divider size="md" orientation="vertical" style={{ height: "25px" }} />
        <Text className={classes.text} fz={isMobile?"15px":"19px"}>About</Text>
      </Group>

      <Center maw={800} h={100} mx="auto" mt={"sm"}>
        <Text
          className={classes.text}
          align="center"
          justify={"center"}
          p={"xl"}
          fz={isMobile?"15px":"17px"}
        >
          There was a time when people got a job right out of school and stuck
          with it until they retired. Those days are gone for good.There was a
          time when people got a job.
        </Text>
      </Center>
      <Group mt={"sm"}>
        <Text className={classes.text} fz={isMobile?"15px":"19px"}>
          Terms and Conditions
        </Text>
        <Text className={classes.text} fz={isMobile?"15px":"19px"}>
          Privacy Policy
        </Text>
      </Group>
    </Stack>

    // </Flex>
  );
};

export default index;
