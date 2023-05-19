import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/layouts/HomeScreen';
import SumasScreen from './src/layouts/SumasScreen';
import RestasScreen from './src/layouts/RestasScreen';
import MultiplicacionesScreen from './src/layouts/MultiplicacionesScreen';
import DivisionesScreen from './src/layouts/DivisionesScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Sumas' component={SumasScreen} />
        <Stack.Screen name='Restas' component={RestasScreen} />
        <Stack.Screen name='Multiplicaciones' component={MultiplicacionesScreen} />
        <Stack.Screen name='Divisiones' component={DivisionesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
