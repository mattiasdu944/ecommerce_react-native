import { Text, View } from 'react-native';
import { Drawer } from "../Drawer";

import { COLORS } from "../theme";
import { MENU_OPTIONS } from "../constants/menu";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RootLayout() {
  
  return (
    <Drawer 
      screenOptions={{
        drawerStyle:{
          paddingTop: 20,
          paddingHorizontal:10,
          borderTopRightRadius: 20,
          borderBottomRightRadius:20,
        },
        drawerItemStyle:{
          borderRadius:10,
          marginHorizontal:15,
          paddingHorizontal:5
        },        
        headerTitleAlign: 'center',
        sceneContainerStyle:{
          backgroundColor:'#fff',
          marginHorizontal:15
        },

      }}
    >
        {
          MENU_OPTIONS.map(option => (
            <Drawer.Screen
            key={option.name}
              name={option.name} // This is the name of the page and must match the url from root
              options={{
                title: option.title,
                drawerLabel:({ focused }) => <Text style={{ color: focused ? 'white': COLORS.text.light  }}>{option.title}</Text>,
                drawerActiveBackgroundColor: COLORS.primary,
                drawerIcon: ({ focused }) => <Ionicons color={focused ? 'white': COLORS.text.light} size={20} name={ focused ? option.icon : `${option.icon}-outline` as any }/>
              }}
            />

          ))

        }

    </Drawer>
  );
}