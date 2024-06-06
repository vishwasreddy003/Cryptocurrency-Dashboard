import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"#132043"}>
      <Button color='#132043' variant='solid'>
        <Link to="/">Home</Link>
      </Button>
      <Button color = '#132043'variant='solid'>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button color='#132043' variant='solid'>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;