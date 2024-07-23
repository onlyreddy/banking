import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { View, Text, Alert } from 'react-native';
import { DefaultTheme } from 'react-native-paper';
import Layout from './src/layout/Layout';
import { showIf } from 'react-render-helpers';
import BottomNavigation from './src/features/bottom-navigation/BottomNavigation';
import Login from './src/features/login/Login';

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#006a4d',
    accent: '#03dac4',
  },
};

export default function App() {
  const [showHomePage, setShowHomePage] = React.useState(false);

  const onLogonClick = React.useCallback(
    () => {
      setShowHomePage(true)
    },
    [],
  )

  return (
    <SafeAreaProvider>
      <PaperProvider theme={customTheme}>
        {showHomePage ? <BottomNavigation /> : <Login
          onLogonClick={onLogonClick}
        />}
      </PaperProvider>
    </SafeAreaProvider>
  );
}
