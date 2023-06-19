import { Grid, Text, Title } from "@mantine/core";
import Button from "../../Components/Button";
import { useMediaQuery } from "@mantine/hooks";

const ChooseUs = () => {
    const isMobile=useMediaQuery('(max-width: 700px)')
  return (
    <Grid m={"0"} px={isMobile ?"20px":"50px"} mb={"40px"}>
      <Grid.Col span={12} md={6} lg={6} >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/a1hEY3Ii70I?autoplay=1&loop=1&playlist=a1hEY3Ii70I"
          frameborder="4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          //   allowfullscreen
          style={{ borderRadius: "10px" }}
        ></iframe>
      </Grid.Col>
      <Grid.Col span={12} md={6} lg={6} p={"xl"}  >
        <Title color="#37496F" order={2}>
          Why Choose Us
        </Title>
        <Text fw={"bold"} fz={"20px"} w={"80%"} align="justify" mt={"sm"}>
          &quot;A Picture is worth a thousand words, a Video is even
          better.&quot;
        </Text>
        <Text align="justify" mt={"xl"}>
          Faces2hire was built on the principles of giving everyone the
          opportunity to promote themselves or tree, into finding a better job
          with the potential of making more money. The site was designed to
          allow you to create an interactive profile with the benefit of adding
          an introduction video presenting yourself to the world of employers.
          You're more than just a piece of paper or a boring resume that doesn't
          bring out the best in you. The site allows you to showcase your
          personality and accomplishments to shine to employers
        </Text>
        <Button label={"See More"} bg={true} mt={"xl"}/>
      </Grid.Col>
    </Grid>
  );
};

export default ChooseUs;
