import { FlatList } from "native-base";
import React from "react";
import { Product } from "./ProductItem";
import { ListRenderItem } from "react-native";

interface ProductListProps {
  data: Product[];
  renderProduct: ListRenderItem<Product>;
}

const ProductList: React.FC<ProductListProps> = ({ data, renderProduct }) => {
  return (
    <FlatList
      style={{ flex: 1, padding: 16 }}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderProduct}
    />
  );
};

export default ProductList;
