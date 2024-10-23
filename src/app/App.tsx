import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ExpensesScreen} from '../screens/ExpensesScreen.tsx';
import {AddExpenseScreen} from '../screens/AddExpenseScreen.tsx';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StoreProvider} from '@/app/providers/storeProvider';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ExpensesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Expenses"
        options={{headerShown: false}}
        component={ExpensesScreen}
      />
      <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Expenses" component={ExpensesStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
