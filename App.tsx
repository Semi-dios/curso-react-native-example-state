/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from '././src/context/AuthContext';

import { Index } from '././src/navigator/Index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './src/themes/themes';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppState>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <Index />
          </NavigationContainer>
        </GestureHandlerRootView>
      </AppState>
    </SafeAreaProvider>
  );
};

const AppState = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
