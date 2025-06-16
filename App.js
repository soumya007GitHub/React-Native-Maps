import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Search from './Screens/Search';
import Fav from './Screens/Fav';
import Profile from './Screens/Profile';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  const COLORS = {
    primary: 'blue',
    secondary: 'black'
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.secondary,
          tabBarButton: (props) => <TouchableOpacity {...props} android_ripple={null} />
        }}
      >
        <Tab.Screen
          name="HomePage"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="SearchPage"
          component={Search}
          options={{
            tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color={color} />,
            tabBarLabel: 'Search',
          }}
        />
        <Tab.Screen
          name="FavPage"
          component={Fav}
          options={{
            tabBarIcon: ({ color }) => <MaterialIcons name="favorite-border" size={24} color={color} />,
            tabBarLabel: 'Favourite',
          }}
        />
        <Tab.Screen
          name="ProfilePage"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
