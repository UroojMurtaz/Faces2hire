import { Carousel } from "@mantine/carousel";
import message from "../../../assets/Images/message.svg";
import profile from "../../../assets/Images/profile.svg";
import resume from "../../../assets/Images/resume.svg";
import connect from "../../../assets/Images/connect.svg";
import employer from "../../../assets/Images/Employer.svg";
import video from "../../../assets/Images/video.svg";
import mode from "../../../assets/Images/mode.svg";
import analytics from "../../../assets/Images/analytics.svg";
import dateicon from "../../../assets/Images/dateicon.png";
import messageicon from "../../../assets/Images/messageicon.png";

import { Card, Container, Group, Image, Text, Title } from "@mantine/core";
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
      content:
        "Receive job alerts from employers and directly message them to schedule an interview",
      image: employer,
    },
    {
      id: 6,
      title: "Video",
      content:
        "Record a personal introduction video to express your personality and tone of voice.Speak about your skill sets and stand out in the crowd",
      image: video,
    },
    {
      id: 7,
      title: "Mode",
      content:
        "Protect your identity while marketing yourself and searching for opportunities.",
      image: mode,
    },
    {
      id: 8,
      title: "Analytics",
      content:
        "Instantly apply to jobs while connecting with job seekers and employers on faces2hire",
      image: analytics,
    },
  ];
  return (
    <>
      <Group position="center" mb={"-40px"}>
        <Text size={"30px"} fw={"bold"}>
          Quick
        </Text>
        <Text size={"30px"} fw={"bold"} color="#03014C">
          Career
        </Text>
      </Group>

      <Carousel
        withIndicators
        height={340}
        slideSize="31%"
        slideGap="xl"
        loop
        align="start"
        p={"60px"}
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 1 },
        ]}
        styles={{
          controls: {
            marginLeft: "-10px",
          },
        }}
      >
        {data.map((item) => (
          <Carousel.Slide key={item.id}>
            <Card shadow="sm" padding="sm" radius="md" withBorder>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                width={"100%"}
                height={"200px"}
                alt="Norway"
              />
              <Text color="grey" fz={"sm"}>
                Creative
              </Text>

              <Text weight={"bold"} fz={"lg"}>
                Norway Fjord Adventures
              </Text>
              <Group>
                <Group spacing="7px">
                  <img src={dateicon} alt="date" />
                  <Text color="grey" fz={"sm"}>
                    2 days ago
                  </Text>
                </Group>
                <Group spacing="7px">
                  <img src={messageicon} alt="date" />
                  <Text color="grey" fz={"sm"}>
                    4 comments
                  </Text>
                </Group>
              </Group>
              <Text mt={"lg"} fz={"sm"} fw={"500"} color="#129307" style={{cursor:"pointer"}}>
                Read more ...
              </Text>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
};

export default index;
