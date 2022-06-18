import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Detail from './pages/Detail/Detail';
import DrawerNavigator from "./components/Drawer/DrawerNavigator";

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer style={{ backgroundColor: '#2b2b2b' }}>
            <Stack.Navigator screenOptions={{
                headerShownd: false
            }}>
                <Stack.Screen
                    name="Home"
                    component={DrawerNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={{
                        title: 'Detalhe',
                        headerStyle: {
                        backgroundColor: '#2b2b2b',
                        borderBottomColor: '#808080',
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold',
                            color: '#f1f1f1'
                        },
                        headerTintColor: '#f1f1f1',
                        headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 15 }}>
                            <Feather
                                name="shopping-bag"
                                size={24}
                                color="#f1f1f1"
                            />
                        </TouchableOpacity>
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

