import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps222892Navigator from '../features/Maps222892/navigator';
import Additem222891Navigator from '../features/Additem222891/navigator';
import Maps222887Navigator from '../features/Maps222887/navigator';
import UserProfile222883Navigator from '../features/UserProfile222883/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps222892: { screen: Maps222892Navigator },
Additem222891: { screen: Additem222891Navigator },
Maps222887: { screen: Maps222887Navigator },
UserProfile222883: { screen: UserProfile222883Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
