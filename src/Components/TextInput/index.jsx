import { TextInput, View } from "react-native"


export const TextCuston = (props) => {
    return (<View>
        <TextInput
            name={props.name}
            onChangeText={(e) => { props.CallBack(props.name, e) }}
            value={props.value}
            placeholder={props.placeholder}
        />
    </View>)
}