import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Text,
  Title,
} from "@mantine/core";
import p1 from "../../../assets/Images/p1.png";
import p2 from "../../../assets/Images/p2.png";
import p3 from "../../../assets/Images/p3.png";
import { useStyles } from "./styles";
import { Rating } from "@mantine/core";
const index = () => {
  const { classes } = useStyles();
  const data = [
    {
      id: 1,
      name: "John Doe",
      title: "Software Engineer",
      technologies: "React, Node, Express, MongoDB",
      image: p1,
    },
    {
      id: 2,
      name: "John Doe",
      title: "Software Engineer",
      technologies: "React, Node, Express, MongoDB",
      image: p2,
    },
    {
      id: 3,
      name: "John Doe",
      title: "Software Engineer",
      technologies: "React, Node, Express, MongoDB",
      image: p3,
    },
  ];
  return (
    <Container mb={"80px"}>
      <Group position="center" mb={"md"}>
        <Text size={"30px"} fw={"bold"}>
          People Around
        </Text>
        <Text size={"30px"} fw={"bold"} color="#03014C">
          You
        </Text>
      </Group>
      <Grid>
        {data.map((item) => (
          <Grid.Col key={item.id} md={"auto"}>
            <Card
              w={"290px"}
              h={"290px"}
              shadow="sm"
              radius="lg"
              withBorder
              className={classes.card}
              style={{ borderLeftWidth: "5px", borderLeftColor: "#1E1F4B" }}
            >
              <Avatar src={item?.image} size={90} />
              <Title order={3} color="#1E1F4B">{item?.name}</Title>
              <Text color="#3B6BB2" size={"sm"}>{item?.title}</Text>
              <Rating defaultValue={2} />
              <Text mt={"md"}>{item?.technologies}</Text>
              <Button variant="outline" className={classes.button} size="xs" mt={"md"}>
                View Profile
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default index;
