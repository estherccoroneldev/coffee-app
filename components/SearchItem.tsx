import { Input, IPinInputProps } from "native-base";

interface SearchItemProps extends IPinInputProps {
  handleChange: (text: string) => void;
}

const SearchItem: React.FC<SearchItemProps> = ({
  handleChange,
  placeholder,
  ...props
}) => {
  return (
    <Input
      mx={4}
      my={2}
      placeholder={placeholder}
      placeholderTextColor="amber.400"
      variant="rounded"
      onChangeText={handleChange}
      borderColor="yellow.200"
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
      {...props}
    />
  );
};

export default SearchItem;
