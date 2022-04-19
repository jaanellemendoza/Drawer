import React from "react";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer'
import { DrawerActions } from "@react-navigation/native";
//import Icon from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 

function Sidebar ({...props}) {
    return (
        
        <DrawerContentScrollView {...props}>
           <DrawerItemList {...props} />
           <DrawerItem 
           label="Sign In or Sign Up" 
           icon={({color,size}) => ( 
            <AntDesign name="user" size={24} color="black" />
           )}
           onPress={() => props.navigation.navigate('Home')}
       />

        <DrawerItem 
           label="Verse of the Day" 
           icon={({color,size}) => ( 
            <AntDesign name="user" size={24} color="black" />
           )}
           onPress={() => props.navigation.navigate('Verse')}
        />

        <DrawerItem 
           label="Settings" 
           icon={({color,size}) => ( 
            <AntDesign name="setting" size={24} color="black" />
           )}
           onPress={() => props.navigation.navigate('Verse')}
        />
        
        </DrawerContentScrollView>
    );
}
export default Sidebar;
