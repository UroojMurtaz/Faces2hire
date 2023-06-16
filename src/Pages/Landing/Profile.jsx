import { Container, Flex, Group, Paper, Stack, Text } from "@mantine/core";
import man from "../../assets/Images/man.png";
import { useStyles } from "./styles";

export const Profile = () => {
  const { classes } = useStyles();
  const data = [
    {
      id: 1,
      content: "Negotiate your own salary range",
    },
    {
      id: 2,
      content: "Get matched with jobs that fit your skills",
    },
    {
      id: 3,
      content: "Promote yourself with a personalized introduction video",
    },
    {
      id: 4,
      content: "Receive job alerts aligned with your skill sets",
    },
  ];
  return (
    <div>
      <Text size={"30px"} fw={"bold"} align="center" p={"xl"}>
        Benefits Of Creating A Profile
      </Text>
      <Flex align={"center"} style={{width:"100%"}}>
        <img src={man}  width={"50%"}/>
        <Container className={classes.container}>
          <Text fz="lg" className={classes.p1}>
            • Negotiate your own salary range
          </Text>
          <Text fz="lg" className={classes.p2}>
            • Promote yourself with a personalized introduction video
          </Text>
          <Text fz="lg" className={classes.p3}>
            • Humanize your profile and showcase your personality
          </Text>
          <Text fz="lg" className={classes.p4}>
            • Employers can view your profile and contact you directly
          </Text>
          <Text fz="lg" className={classes.p5}>
            • Receive job alerts aligned with your skill sets
          </Text>
          <Text fz="lg" className={classes.p6}>
            • Network with other job seekers and compare profiles
          </Text>
          <Text fz="lg" className={classes.p7}>
            • See who viewed your profile through personal analytics
          </Text>
        </Container>
      </Flex>
    </div>
  );
};
