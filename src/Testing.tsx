import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
// type RootStackParamList = {
//   TestingHome: undefined;
//   TesttingSettings: undefined;
// };
const TestingStack = createStackNavigator();

export const Testing = () => {
  return (
      <TestingStack.Navigator>
        <TestingStack.Screen name="TestingHome" component={TestingHome} />
        <TestingStack.Screen
          name="TesttingSettings"
          component={TesttingSettings}
        />
      </TestingStack.Navigator>
  );
};

export const TestingHome = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TestingHome Screen</Text>
    </View>
  );
};

const TesttingSettings = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TesttingSettings Screen</Text>
    </View>
  );
};
