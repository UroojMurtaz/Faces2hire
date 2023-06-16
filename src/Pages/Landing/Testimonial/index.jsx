import { Avatar, Container, Group, Text } from "@mantine/core";

import p1 from "../../../assets/Images/p1.png";
import p2 from "../../../assets/Images/p2.png";
import p3 from "../../../assets/Images/p3.png";
import p4 from "../../../assets/Images/p4.png";
import p5 from "../../../assets/Images/p5.png";
import { useState } from "react";
import { useStyles } from "./styles";

const index = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      image: p1,
      text: "Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quibusdam.",
    },
    {
      id: 2,
      name: "John Doe",
      image: p2,
      text: "Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quibusdam.",
    },
    {
      id: 3,
      name: "John Doe",
      image: p3,
      text: "I heard about faces2hire from a friend that told me about a free service. I signed up on the site and created my profile which is similar to a resume format. I have to say that I am actually the first person at faces2hire to be hired by its own platform.You never know who will be looking for a candidate to bring into their company. I hope to help others find their new favorite place to work.",
    },
    {
      id: 4,
      name: "John Doe",
      image: p4,
      text: "Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quibusdam.",
    },
    {
      id: 5,
      name: "John Doe",
      image: p5,
      text: "Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quibusdam.",
    },
  ];
  const centerIndex = Math.ceil(data.length / 2);
  const { classes } = useStyles();
  const [selectedImage, setSelectedImage] = useState(centerIndex);

 
  return (
    <Container className={classes.container} size={"full"}>
      <Text fz={"35px"} fw={"bold"} color="#03014C">
        Let's Hear
      </Text>
      <Text fz={"35px"} fw={"bold"} color="#03014C">
        What They Says
      </Text>
      <Group>
        <Text></Text>
      </Group>
      {data.map(
        (item) =>
          item?.id === selectedImage && (
            <Text
              key={item?.id}
              size={"18px"}
              p={"md"}
              style={{ width: "50%", lineHeight: "2.2" }}
              color="#03014C"
              align="center"
            >
              "{item?.text}"
            </Text>
          )
      )}

      <Group spacing="xl">
        {data.map((item) => (
          <Avatar
            onClick={() => setSelectedImage(item?.id)}
            key={item?.id}
            src={item?.image}
            alt="it's me"
            size={item?.id === centerIndex ? "xl" : "md"}
            style={{
              border: item?.id === centerIndex ? "5px solid green" : "",
              borderRadius: "50%",
            }}
          />
        ))}
      </Group>
    </Container>
  );
};

export default index;
