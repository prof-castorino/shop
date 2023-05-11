import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextCuston } from '../Components/TextInput';
import { ButtonCuston } from '../Components/Button';
import { setData, getData } from "../Contexts/Storage";
import { useState, useEffect } from 'react';

export const Login = ({ navigation }) => {
    useEffect(
        () => {
            function handleStatusChange(data) {
                if (data) {
                    navigation.navigate('Cadastro')
                    return true
                }
                if (data.login) {
                    navigation.navigate('Routes')
                    return true
                }
            }
            getData(handleStatusChange, 'user')
        }
    )
    const [error, setError] = useState('')
    const [form, setForm] = useState('')

    const Validate = () => {
        return (form.user && form.pass) ? true : false
    }
    const next = () => {
        data.login = true
        setData('user', data)
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
            <Text>Login</Text>
            <TextCuston name='user' CallBack={CallBack} value={form.name} placeholder='User' />
            <TextCuston name='pass' CallBack={CallBack} value={form.name} placeholder='Password' />
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
