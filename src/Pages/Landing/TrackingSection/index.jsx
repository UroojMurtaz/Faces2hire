import { Container, Grid, Image, Text, Title } from "@mantine/core";
import trackPic from "../../../assets/images/track.png";
import { useMediaQuery } from "@mantine/hooks";

const index = () => {
  const isMobile = useMediaQuery("(max-width: 600px)")
  return (
    <Grid mb={"lg"} m={"0"} px={isMobile ? "0px" : "100px"}>
      <Grid.Col md={6} lg={6}>
        <Image src={trackPic} width={"100%"} alt="Norway" />
      </Grid.Col>
      <Grid.Col md={6} lg={6} p={"xl"}>
        <Title order={2}>"Free Application Tracking System"</Title>
        <ul style={{ fontSize: "17px", lineHeight: "1.5" }}>
          <li>Streamlined application process</li>
          <li>Centralized application management</li>
          <li>Time efficiency, increased visibility</li>
          <li>Resume optimization, tracking job market trends</li>
          <li>Receive job alerts aligned with your skill sets</li>
          <li>Network with other job seekers and compare profiles</li>
          <li>See who viewed your profile through personal analytics</li>
          <li>Collaboration and networking, access to resources.</li>
        </ul>
      </Grid.Col>
    </Grid>
  );
};

export default index;
