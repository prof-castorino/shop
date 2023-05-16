import { getData, setData } from '../../Contexts/Data'
import { View } from "react-native"
export const Logoff = ({ navigation }) => {
    useEffect(() => {
        const findData = (value) => {
            value.login = false
            setData(value, 'user')
            navigation.navigate('Login')
        }
        getData(findData, 'user')
    })
    return (<View></View>)
}