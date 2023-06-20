import { Container, Group, Image, SimpleGrid, Text } from "@mantine/core";
import { useStyles } from "./styles";
import b1 from "../../assets/Images/b1.svg";
import b2 from "../../assets/Images/b2.png";
import b3 from "../../assets/Images/b3.png";
import b4 from "../../assets/Images/b4.png";
import b5 from "../../assets/Images/b5.png";
import b6 from "../../assets/Images/b6.png";

const EmployersUsing = () => {
  const { classes } = useStyles();
  const data = [
    {
      image: b1,
    },
    {
      image: b2,
    },
    {
      image: b3,
    },
    {
      image: b4,
    },
    {
      image: b5,
    },
    {
      image: b6,
    },
    {
      image: b1,
    },
    {
      image: b2,
    },
    {
      image: b3,
    },
    {
      image: b4,
    },
    {
      image: b5,
    },
    {
      image: b6,
    },
    {
      image: b1,
    },
    {
      image: b2,
    },
    {
      image: b3,
    },
    {
      image: b4,
    },
    {
      image: b5,
    },
    {
      image: b6,
    },
  ];
  return (
    <Container size={"full"} className={classes.EmployeeContainer}>
      <Group position="center" mb={"md"}>
        <Text size={"30px"} fw={"bold"}>
          Employers Using
        </Text>
        <Text size={"30px"} fw={"bold"} color="#03014C">
          Faces2Hire
        </Text>
      </Group>
      <SimpleGrid
        cols={6}
        // px={"md"}
        // mt={"-10px"}
        // bg={"red"}
      >
        {data.map((item, index) => (
          <Image
            src={item.image}
            width={"80%"}
            alt="Norway"
            key={index}
            style={{ margin: "auto" }}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default EmployersUsing;
