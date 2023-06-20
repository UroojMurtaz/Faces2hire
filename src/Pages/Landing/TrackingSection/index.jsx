import { Container, Grid, Image, Text, Title } from "@mantine/core";
import trackPic from "../../../assets/Images/track.png";
import { useMediaQuery } from "@mantine/hooks";
import {useStyles} from "./styles"

const index = () => {
  const isMobile = useMediaQuery("(max-width: 600px)")
  const {classes}=useStyles()
  return (
    <Grid mb={"lg"} m={"0"} px={isMobile ? "0px" : "100px"}>
      <Grid.Col md={6} lg={6}>
        <Image src={trackPic} width={"100%"} alt="Norway" />
      </Grid.Col>
      <Grid.Col md={6} lg={6} p={"xl"}>
        <Title order={2}>"Free Application Tracking System"</Title>
        <ul style={{ fontSize: "17px"}} >
          <li className={classes.list} >Streamlined application process</li>
          <li className={classes.list}>Centralized application management</li>
          <li className={classes.list}>Time efficiency, increased visibility</li>
          <li className={classes.list}>Resume optimization, tracking job market trends</li>
          <li className={classes.list}>Receive job alerts aligned with your skill sets</li>
          <li className={classes.list}>Network with other job seekers and compare profiles</li>
          <li className={classes.list}>See who viewed your profile through personal analytics</li>
          <li className={classes.list}>Collaboration and networking, access to resources.</li>
        </ul>
      </Grid.Col>
    </Grid>
  );
};

export default index;
