import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import { ViewProps } from 'react-native';

export interface Product extends ViewProps {
  title: string;
  description: string;
  image: string;
}

const ProductItem: React.FC<Product> = ({ title, description, image }) => {
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      borderColor="#FFFFFF"
      borderWidth="1"
      my={2}
      _dark={{
        backgroundColor: '#edd6c8',
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: '#FFFFFF',
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
          <Heading color="#242424" size="md">
            {title}
          </Heading>
          <Text color="#A2A2A2" numberOfLines={4} fontWeight="400">
            {description}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default ProductItem;
