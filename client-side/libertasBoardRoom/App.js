import 'react-native-gesture-handler';
import React from 'react'
import Login from './components/widgets/login';
import Dashboard from './components/widgets/Dashboard'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator();

const App = () => {
return(
  <NavigationContainer>
       <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="dash" component={Dashboard} options={{headerShown:false}}/>
       </Stack.Navigator>
  </NavigationContainer>
)
}

export default App;