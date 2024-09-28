import { Tabs } from 'expo-router';
// import {Stylesheet} from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function RootLayout() {
    return (
        <>
        <TabLayout />
        </>
    );
}

function TabLayout() {
    return (
        <Tabs screenOptions={{ 
            tabBarActiveTintColor: 'lightblue', 
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle:{
                fontSize: 12
            }
        }}>
            <Tabs.Screen
                name='index' 
                options={{
                    title: 'Map Tab',
                    tabBarHideOnKeyboard: true,
                    // tabBarIcon: ({ color }) => <FontAwesome6 name="shop" size={20} color="black" />,
                }}
            />
            <Tabs.Screen
                name='usercart'
                options={{
                    title: 'User Cart',
                    tabBarHideOnKeyboard: true,
                    // tabBarIcon: ({ color }) => <FontAwesome6 name="cart-shopping" size={20} color="black" />,
                }}
            />
        </Tabs>
    );
}