import { Pressable, Text } from "react-native"
import { Style } from "../../Contexts/Theme"

export const ButtonCuston = (props) => {


    return (<Pressable onPress={props.onPress} style={Style.button}>
        <Text style={Style.textButton}>{props.placeholder}</Text>
    </Pressable>)
}