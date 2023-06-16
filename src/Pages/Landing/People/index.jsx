import { Container, Group, Text } from "@mantine/core";

const index = () => {
    const data = [
        {
            id: 1,
            name:"John Doe",
            title:"Software Engineer",
            location:"New York, NY",
        }]
  return (
    <Container h={"50vh"}>
      <Group position="center" mb={"-40px"}>
        <Text size={"30px"} fw={"bold"}>
          People Around
        </Text>
        <Text size={"30px"} fw={"bold"} color="#03014C">
          You
        </Text>
      </Group>
    </Container>
  );
};

export default index;
