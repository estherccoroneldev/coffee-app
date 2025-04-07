import { Center, Heading, VStack, Image, View } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchItem from '../../components/SearchItem';
import ProductList from '../../components/ProductList';
import ProductItem, { Product } from '../../components/ProductItem';
import { ListRenderItem } from 'react-native';
import useCoffeeList from '../../hooks/useCoffeeList';

const PAGE_TITLE = 'The Coffee List!';

const renderProduct: ListRenderItem<Product> = ({ item }) => (
  <ProductItem key={item.id} {...item} />
);

const CoffeeListScreen: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState('');

  const { filteredList, getProducts, loading } = useCoffeeList({
    searchText: searchValue,
  });

  React.useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (text: string) => setSearchValue(text);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Center _dark={{ bg: 'amber.900' }} _light={{ bg: '#e3e3e3' }} flex={1}>
        <VStack _light={{ bg: 'muted.700' }} w={'100%'} pt={8} px={4}>
          <SearchItem
            placeholder="Search coffee"
            handleChange={handleChange}
            value={searchValue}
          />
          <Heading
            size="2xl"
            position="absolute"
            color="#FFFFFF"
            top={140}
            zIndex={1}
            left={50}
            w="50%"
          >
            {PAGE_TITLE}
          </Heading>
          <Image
            alignSelf="center"
            source={require('../../assets/banner-empty.png')}
            alt="banner-coffee"
            borderRadius={12}
            resizeMode="contain"
            bottom={-20}
          />
        </VStack>

        {/* TO DO: Add TAB => HOT, ICED, All Coffee */}
        <View h={6} />

        <ProductList data={filteredList} renderProduct={renderProduct} />
      </Center>
    </SafeAreaView>
  );
};

export default CoffeeListScreen;
