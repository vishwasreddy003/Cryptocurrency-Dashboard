import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };


  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );

        console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"5"}>
              <Radio colorScheme = 'teal' value={"inr"}>INR</Radio>
              <Radio colorScheme = 'teal' value={"usd"}>USD</Radio>
              <Radio colorScheme = 'teal' value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"greenyellow"}
                onClick={() => changePage(index + 1)}
                css={{ "&:hover": {
                  transform: "scale(1.1)",
                  color : "greenyellow",
                  backgroundColor : "black"
                  },
                }}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;