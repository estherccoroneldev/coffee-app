import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import CoffeeListScreen from './app/screens/CoffeeListScreen';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

export default function App() {
  return (
    <NativeBaseProvider>
      <CoffeeListScreen />
    </NativeBaseProvider>
  );
}
