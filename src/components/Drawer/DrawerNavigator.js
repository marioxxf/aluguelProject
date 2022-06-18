import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../../pages/Home/Home';
import Sobre from '../../pages/Sobre/Sobre'

export default function DrawerNavigator () {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator useLegacyImplementation
            drawerContentOptions={{
                itemStyle: { marginVertical: 5 },
            }}

            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#db3232'
                },
                drawerActiveBackgroundColor: '#333333',
                drawerActiveTintColor: "#f1f1f1",
                headerStyle: {
                    backgroundColor: '#db3232',
                },
                headerTitleStyle: {
                    fontFamily: 'Montserrat_700Bold',
                    color: '#f1f1f1'
                },
                headerTintColor: '#f1f1f1',
            }}
            >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Sobre" component={Sobre} />
        </Drawer.Navigator>
    );
}

