import 'react-native-gesture-handler'
import React from 'react'
import Login from './components/widgets/login'
import Dashboard from './components/widgets/Dashboard'
import Drawer from './components/widgets/DrawerContent'
import SignUp from './components/widgets/SignUp'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider as PaperProvider } from 'react-native-paper'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="dash"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={'SignUp'}
            component={SignUp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App
