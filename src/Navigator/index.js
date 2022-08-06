import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Home, Reporting} from "../Screens";
import configureStore from '../Reducer/Store/Store';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();
const store = configureStore();
const Navigators = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Reporting" component={Reporting} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
    };

    export default Navigators;