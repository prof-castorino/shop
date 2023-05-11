
import { Routes } from "./src/Screens/routes";
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Login } from "./src/Screens/login";
import { Register } from "./src/Screens/register";
import { Logoff } from "./src/Screens/logoff";

const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
}

const Stack = createSharedElementStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Cadastro" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Logoff" component={Logoff} />
      <Stack.Screen name="Routes" component={Routes} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}
