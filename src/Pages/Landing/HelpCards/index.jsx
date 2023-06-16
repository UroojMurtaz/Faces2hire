import { Card, Grid, Text, Title } from "@mantine/core";
import message from "../../../assets/Images/message.svg";
import profile from "../../../assets/Images/profile.svg";
import resume from "../../../assets/Images/resume.svg";
import connect from "../../../assets/Images/connect.svg";
import employer from "../../../assets/Images/Employer.svg";
import video from "../../../assets/Images/video.svg";
import mode from "../../../assets/Images/mode.svg";
import analytics from "../../../assets/Images/analytics.svg";
import { useStyles } from "./styles";

const index = () => {
  const { classes } = useStyles();
  const data = [
    {
      id: 1,
      title: "Messages",
      content:
        "Receive messages from employers while managing and tracking your applications",
      image: message,
    },
    {
      id: 2,
      title: "Profile",
      content:
        "Create your live interactive profile and be viewed by employers",
      image: profile,
    },
    {
      id: 3,
      title: "Resume",
      content:
        "Direct exposure through our Applicant Tracking Software partners with the ability to receive job offers",
      image: resume,
    },
    {
      id: 4,
      title: "Connect",
      content:
        "Instantly apply to jobs while connecting with job seekers and employers on faces2hire",
      image: connect,
    },
    {
        id: 5,
        title: "Employer",
        content:"Receive job alerts from employers and directly message them to schedule an interview",
        image: employer,
    },
    {
        id: 6,
        title: "Video",
        content:"Record a personal introduction video to express your personality and tone of voice.Speak about your skill sets and stand out in the crowd",
        image: video,
    },{
        id: 7,
        title: "Mode",
        content:"Protect your identity while marketing yourself and searching for opportunities.",
        image: mode,
    },
    {
        id: 8,
        title: "Analytics",
        content:"Instantly apply to jobs while connecting with job seekers and employers on faces2hire",
        image: analytics,
    }
  ];

  return (
    <>
     <Text size={"30px"} fw={"bold"} align="center" p={"xl"}>
        How We Help You
      </Text>
    <Grid className={classes.mainContainer} m={"0"} mt={"-60px"}>
      {data.map((item) => (
        <Grid.Col md={"auto"} key={item.id}>
          <Card
            w={"290px"}
            h={"250px"}
            shadow="sm"
            radius="md"
            withBorder
            className={classes.card}
          >
            <img src={item.image} alt="" />
            <Title align="center" order={2} mt={"sm"}>
              {item.title}
            </Title>
            <Text align="center" fz={"14px"} mt={"xs"} color="#676464">
            {item.content}
            </Text>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
    </>
  );
};

export default index;
