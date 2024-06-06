import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import imagesrc from "./assets/person .jpeg";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={'honeydew'}
      maxH={"48"}
      px={"16"}
      py={["10", "7"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Empowering Indian Traders with Affordable Expertise in Crypto Trading Strategies.
          </Text>
        </VStack>

        <VStack>
          <img src="/assets/" alt="" />
          <Avatar boxSize={"28"} mt={["10", "0"]} src={imagesrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;