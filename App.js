/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button, SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
const SCREENS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const Screen = ({route, navigation}) => {
  const {title} = route.params;
  const nextScreen = +title + 1;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 30}}>Screen {title}</Text>
        <Text style={{fontSize: 30}}>Title 1</Text>
        <Text style={{fontSize: 30}}>Title 2</Text>
        <Text style={{fontSize: 30}}>Title 3</Text>
        <Text style={{fontSize: 30}}>Title 4</Text>
        <Text style={{fontSize: 30}}>Title 5</Text>
        <Text style={{fontSize: 30}}>Title 6</Text>
        <Text style={{fontSize: 30}}>Title 7</Text>
        <Text style={{fontSize: 30}}>Title 8</Text>
        <Text style={{fontSize: 30}}>Title 9</Text>
      </View>

      {nextScreen < 10 && (
        <Button
          title={`Next ${nextScreen}`}
          onPress={() => navigation.navigate(nextScreen.toString())}
        />
      )}
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {SCREENS.map(name => (
          <Stack.Screen
            key={name}
            name={name}
            component={Screen}
            initialParams={{title: name}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
