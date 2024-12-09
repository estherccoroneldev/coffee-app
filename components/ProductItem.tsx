import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { ViewProps } from "react-native";

export interface Product extends ViewProps {
  title: string;
  description: string;
  image: string;
}

const ProductItem: React.FC<Product> = ({ title, description, image }) => {
  return (
    <Box
      maxW="sm"
      rounded="lg"
      overflow="hidden"
      borderColor="yellow.200"
      borderWidth="1"
      my={2}
      _dark={{
        backgroundColor: "amber.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "amber.100",
      }}
    >
      <HStack space={1}>
        <AspectRatio w="30%" ratio={9 / 16}>
          <Image
            alignSelf="center"
            source={{
              uri: image,
            }}
            alt="image"
          />
        </AspectRatio>
        <VStack p={4} maxWidth="70%">
          <Heading color="amber.900" size="md">
            {title}
          </Heading>
          <Text color="yellow.700" numberOfLines={4} fontWeight="400">
            {description}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default ProductItem;
