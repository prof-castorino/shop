import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextCuston } from '../Components/TextInput';
import { ButtonCuston } from '../Components/Button';
import { setData } from "../Contexts/Storage";
import { useState } from 'react';

export const Register = ({ navigation }) => {

    const [error, setError] = useState('')
    const [form, setForm] = useState('')

    const Validate = () => {
        return (
            form.user
            && form.pass
            && form.email
            && form.phone
        )
            ? true : false
    }
    const next = () => {
        var clone = Object.assign({}, form);
        clone.login = true
        setData('user', clone)
        navigation.navigate('Routes')
    }
    const onPress = () => {
        (Validate()) ?
            next(form) :
            setError('Cadastro invalido')
    }
    const CallBack = (key, data) => {
        var clone = Object.assign({}, form);
        clone[key] = data
        setForm(clone)
    }

    return (
        <View style={styles.container}>
            <Text>Cadastro</Text>
            <TextCuston name='user' CallBack={CallBack} value={form.name} placeholder='User' />
            <TextCuston name='name' CallBack={CallBack} value={form.name} placeholder='Nome' />
            <TextCuston name='pass' CallBack={CallBack} value={form.name} placeholder='Password' />
            <TextCuston name='email' CallBack={CallBack} value={form.name} placeholder='Email' />
            <TextCuston name='phone' CallBack={CallBack} value={form.name} placeholder='Telefone' />
            <Text>{error}</Text>
            <ButtonCuston
                onPress={onPress}
                placeholder='Cadastrar'
            />
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
