import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { AntDesign, Ionicons } from '@expo/vertor-icons';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';

const Tab = createBottomTabNavigator();

const icons = {
   Home: {
       lib: AntDesign,
       name: 'home',
   }, 

   Wallet: {
    lib: AntDesign,
    name: 'home',
    }, 

    Pay: {
    lib: Ionicons,
    name: 'home',
    }, 

    Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
    }, 

    Settings: {
    lib: AntDesign,
    name: 'setting',
    }, 
}

export default function Navigation() {
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    title:'Início',
                }} 

            />
            <Tab.Screen 
                name="Wallet" 
                component={WalletScreen} 
                options={{
                    title:'Carteira',
                }} 
            />
            <Tab.Screen 
                name="Pay" 
                component={PayScreen} 
                options={{
                    title:'Pagar',
                }} 
            />
            <Tab.Screen 
                name="Notifications" 
                component={PayScreen} 
                options={{
                    title:'Notificações',
                }} 
            />
            <Tab.Screen 
                name="Settings" 
                component={PayScreen} 
                options={{
                    title:'Ajustes',
                }} 
            />
        </Tab.Navigator>
    );
}