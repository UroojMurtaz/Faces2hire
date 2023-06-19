import { Container, Group, Title } from "@mantine/core";
import { useStyles } from "./styles";
import Button from "../../Components/Button";

const BuildProfile = () => {
  const { classes } = useStyles();
  return (
    <Container size={"full"} className={classes.Container}>
      <Title align="center" color="#FFFFFF">
        Build Your Profile Once And Let
      </Title>
      <Title align="center" color="#FFFFFF">
        Employer Find You
      </Title>
      <Group position="center" mt={"xl"}>
        <Button label={"Get Started Now"} size="md" />
      </Group>
    </Container>
  );
};

export default BuildProfile;
