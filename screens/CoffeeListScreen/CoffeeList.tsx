import { Button, Center, Heading } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchItem from "../../components/SearchItem";
import ProductList from "../../components/ProductList";
import ProductItem, { Product } from "../../components/ProductItem";
import { ListRenderItem } from "react-native";
import useCoffeeList from "../../hooks/useCoffeeList";

const PAGE_TITLE = "Coffee List";

const renderProduct: ListRenderItem<Product> = ({ item }) => (
  <ProductItem key={item.id} {...item} />
);

const CoffeeListScreen: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const { filteredList, getProducts, loading } = useCoffeeList({
    searchText: searchValue,
  });

  React.useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (text: string) => setSearchValue(text);

  const handleRefresh = () => {
    getProducts();
    setSearchValue("");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Center
        _dark={{ bg: "amber.900" }}
        _light={{ bg: "amber.50" }}
        pt={4}
        px={2}
        flex={1}
      >
        <Heading
          size="xl"
          _dark={{
            color: "amber.50",
          }}
          _light={{
            color: "amber.900",
          }}
        >
          {PAGE_TITLE}
        </Heading>
        <SearchItem
          placeholder="Search"
          handleChange={handleChange}
          value={searchValue}
        />
        <ProductList data={filteredList} renderProduct={renderProduct} />
        <Button
          isLoading={loading}
          isLoadingText="Loading"
          backgroundColor="#341c1c"
          onPress={handleRefresh}
          size="md"
          my={4}
          rounded="full"
          px={32}
        >
          Refresh
        </Button>
      </Center>
    </SafeAreaView>
  );
};

export default CoffeeListScreen;
