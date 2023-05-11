import { removeData } from "../Contexts/Storage";
import { useEffect } from 'react';

export const Logoff = ({ navigation }) => {
    useEffect(
        () => {
            removeData('user')
            navigation.navigate('Cadastro')
        }
    )
    return (
        <View style={styles.container}></View>
    );
}
