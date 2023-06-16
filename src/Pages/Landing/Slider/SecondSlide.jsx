import React from "react";
import { useStyles } from "./styles";
import { Container, Divider, Flex, Group, Stack, Text } from "@mantine/core";
import Button from "../../../Components/Button";
import { useMediaQuery } from "@mantine/hooks";

const SecondSlide = () => {
  const { classes } = useStyles();
  const isMobile=useMediaQuery(`(min-width:600px)`)

  return (
   <div>
    
   </div>
   
   
  );
};

export default SecondSlide;
