import { Group, Image, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import employ1 from "../../assets/Images/employ1.png";
import employ2 from "../../assets/Images/employ2.svg";
import employ3 from "../../assets/Images/employ3.svg";
import { useMediaQuery } from "@mantine/hooks";

const HireEmployees = () => {
    const isMobile=useMediaQuery("(min-width: 800px)")
  return (
    <SimpleGrid cols={3} m={"0"} p={"lg"}
    breakpoints={[
        { maxWidth: '62rem', cols: 3, spacing: 'md' },
        { maxWidth: '48rem', cols: 2, spacing: 'sm' },
        { maxWidth: '36rem', cols: 1, spacing: 'sm' },
      ]}>
      <Stack
        align="center"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title align="center" color="#03014C">
          We Hire Employees from different Regions
        </Title>
        <Text fw={"bold"} color="#1E1E1E" p={"md"} align="center">
          Because faces2hire was very serious about providing jobs, facilities,
          environment and best user experience for finding suitable job
        </Text>
      </Stack>
      <Group position="center" mt={"xl"} p={"md"}>
        <Image src={employ1} maw={240} ml={"-50px"} />
        <Image src={employ2} maw={320} mx="auto" />
      </Group>
      {
        isMobile && 
        <Group position="center" mt={"xl"} p={"md"}>
        <Image src={employ3} maw={520} mx="auto" />
      </Group>
      }
      
    </SimpleGrid>
  );
};

export default HireEmployees;
