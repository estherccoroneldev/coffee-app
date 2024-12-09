import React from "react";
import { Product } from "../components/ProductItem";
import axios from "axios";

const BASE_URL = "https://api.sampleapis.com/coffee/hot";

const useCoffeeList = ({ searchText }: { searchText: string }) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}`);
      setProducts(response.data);
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    } finally {
      setLoading(false);
    }
  };

  const filteredList = React.useMemo(() => {
    return searchText === ""
      ? products || []
      : [...(products ?? [])].filter((product) =>
          product?.title
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase())
        );
  }, [searchText, products]);

  return {
    getProducts,
    filteredList,
    loading,
  };
};

export default useCoffeeList;
