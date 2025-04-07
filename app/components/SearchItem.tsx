import { Icon, Input, IPinInputProps } from 'native-base';
import { Feather } from '@expo/vector-icons';
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
      p={4}
      placeholder={placeholder}
      placeholderTextColor="muted.400"
      variant="outlined"
      size="xl"
      borderRadius={12}
      onChangeText={handleChange}
      borderColor="muted.600"
      focusOutlineColor="muted.600"
      InputLeftElement={
        <Icon as={Feather} name="search" size={6} ml="4" color="muted.400" />
      }
      _dark={{
        backgroundColor: 'muted.900',
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: 'muted.600',
      }}
      {...props}
    />
  );
};

export default SearchItem;
