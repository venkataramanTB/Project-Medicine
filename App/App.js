import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screen/login'; 
import WelcomeScreen from './src/screen/welcome';
import Home from './src/screen/Home';
import Signup from './src/screen/signup';
import { AuthProvider } from './src/Components/theme';
// import { ThemeContext } from './src/Components/theme';
const Stack = createStackNavigator();
export default function App() {
  // const [isDark, setIsDark] = useState(false);

  // const toggleTheme = () => {
  //   setIsDark(!isDark);
  // };
  return (
    <AuthProvider>
      <NavigationContainer>
          {/* <ThemeContext.Provider value={{ isDark, toggleTheme }}> */}
          <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
        {/* </ThemeContext.Provider> */}
      </NavigationContainer>
    </AuthProvider>
  );
}