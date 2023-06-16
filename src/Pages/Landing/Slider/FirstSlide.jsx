import {
  Box,
  Checkbox,
  Container,
  Flex,
  Grid,
  Group,
  Paper,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";
import { useForm } from "@mantine/form";
import InputField from "../../../Components/InputField";
import Button from "../../../Components/Button";
import { useMediaQuery } from "@mantine/hooks";

const FirstSlide = () => {
  const { classes } = useStyles();
  const isMobile=useMediaQuery(`(min-width:600px)`)
  // useMediaQuery("(min-width: 640px)")
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      projectName: "",
      description: "",
      startDate: "",
      endDate: "",
    },

    validate: {
      projectName: (value) =>
        /^[a-zA-Z0-9-_* ]{2,50}$/.test(value)
          ? null
          : "Please enter a valid project name.",
      description: (value) =>
        value?.length < 2 ? "Please enter description" : null,
    },
  });
  return (
    <Container className={classes.form}>
      <Text size={isMobile ?"38px":"30px"} fw={"bold"} align="center">
        Get Noticed - Get Hired
      </Text>
      <Text size={isMobile ?"33px":"20px"} align="center">
        Search Over 10,000,000 Jobs All for FREE
      </Text>
      <Grid p={"md"} className={classes.form1} m={"xl"}>
        <form>
          <Container style={{ opacity: "1" }} size={isMobile ?"420px":"320px"} p={"sm"}>
            <Grid>
              <Grid.Col sm={6}>
                <InputField placeholder={"First Name"} />
              </Grid.Col>
              <Grid.Col sm={6}>
                <InputField placeholder={"Last Name"} />
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col sm={12}>
                <InputField placeholder={"Enter Your Email"} />
              </Grid.Col>
              <Grid.Col sm={12}>
                <InputField placeholder={"Enter Password"} />
              </Grid.Col>
              <Grid.Col sm={12}>
                <InputField placeholder={"ReEnter Password"} />
              </Grid.Col>
            </Grid>
            <Group position="left" mt="sm">
              <Button label="Post Job for Free" />
            </Group>
          </Container>
        </form>
      </Grid>
    </Container>
  );
};

export default FirstSlide;
