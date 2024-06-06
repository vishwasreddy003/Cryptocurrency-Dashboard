import { Box, VStack, Heading, HStack, Image } from '@chakra-ui/react'
import React from 'react';

const Home = () => {
  const containerStyle = {
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'relative',
  };

  const textStyle = {
    display: 'inline-block',
    fontSize: '24px',
    animation: 'scroll 15s linear infinite',
  };

  const keyframesStyle = `
    @keyframes scroll {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  return (
    <>
      <style>{keyframesStyle}</style>

      <Box w="100%" h="550px" bg={'#FDF0F0'} color="#1F4172" justifyContent={'space-around'} >
        <HStack >
          <VStack spacing='10px' py={'100px'}>
            <Heading
              lineHeight='tall'
              noOfLines={3}
              fontFamily={'Young Serif'}
              margin={'1.5rem'}
            >
              Unlock Your Financial Freedom with Crypto!
            </Heading>

            <div style={containerStyle}>
              <div style={textStyle}>
              Secure Your Future with Crypto: It's Easier Than You Think
              </div>
            </div>
          </VStack>

          <VStack >
            <Image src='https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg'
              borderRadius={'80%'}
              marginTop={'2rem'}
              boxSize={'25rem'}
            />
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

export default Home;
