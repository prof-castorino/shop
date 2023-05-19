import { Text, View } from "react-native"
import { useState } from "react";
import { Style } from "../../Contexts/Theme"
import { ImageCuston } from "../Image";
import { ButtonCuston } from '../Button'
export const Card = (props) => {
    const [qtd, setQtd] = useState(0)
    const addItem = () => { }
    const removeItem = () => { }
    return (<View style={[Style.row, Style.card]}>
        <View style={[Style.column]}>
            <ImageCuston img={props.img} />
            <Text onPress={() => {
                props.navigation.navigate('Details', props)
            }}
                style={Style.text}
            >
                Mais informação
            </Text>
        </View>
        <View style={[Style.column]}>
            <Text style={Style.title}>{props.title}</Text>
            <Text style={Style.text}>{props.descrition}</Text>
            <Text style={Style.title}>R$ {props.price}</Text>
            <Text style={Style.title}>Quantidade {qtd}</Text>
            <View style={[Style.card]}>
                <View style={[Style.column]}>
                    <ButtonCuston onPress={addItem} placeholder='+' />
                </View>
                <View style={[Style.column]}>
                    <ButtonCuston onPress={removeItem} placeholder='-' />
                </View></View>
        </View>
    </View>)
}


          //  img: require("../../../assets/alface.jpg")