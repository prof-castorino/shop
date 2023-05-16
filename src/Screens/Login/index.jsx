import { useEffect, useState } from "react"
import { StatusBar, View } from "react-native"
import { getData, setData } from '../../Contexts/Data'
import { style } from '../../Contexts/Theme'
import { ButtonCuston } from '../../Components/Button'
import { TextCuston } from '../../Components/TextInput'

export const Login = ({ navigation }) => {
    const [error, SetError] = useState('')
    const [form, SetForm] = useState({})
    var data = {}

    useEffect(() => {
        const findData = (value) => {
            data = value
            console.log(data)
        }
        getData(findData, 'user')
    })

    const validate = () => { }// Exercicio proposto
    const next = () => {
        data.login = true
        setData(data, 'user')
        navigation.navigate('Routes') // Link
    }
    const CallBack = (key, value) => {
        var clone = object.assign({}, form) // {user:'',pass:''}
        clone[key] = value
        SetForm(clone)
    }
    const onPress = () => {
        (validate()) ? next(form)
            : SetError('Cadastro invalido')
    }

    return (<View style={style.container}>
        <Text style={style.title}>Login</Text>
        <TextCuston
            CallBack={CallBack}
            name='user'
            placeholder='User'
            value={form.name} />
        <TextCuston
            CallBack={CallBack}
            name='pass'
            placeholder='Password'
            value={form.pass} />
        <Text style={style.container}>{error}</Text>
        <ButtonCuston onPress={onPress} placeholder='cadastrar' />
        <StatusBar style="auto" />
    </View>
    )
}
