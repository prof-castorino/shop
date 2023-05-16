
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { ScreenArray } from "../Contexts/Routes"

const { Navigator, Screen } = createDrawerNavigator()

export const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator>
                {
                    ScreenArray.map((item, index) => (
                        <Screen
                            key={index}
                            name={item.route}
                            component={item.component}
                            options={{ item: item }}
                        />
                    ))
                }
            </Navigator>
        </NavigationContainer>
    )
}