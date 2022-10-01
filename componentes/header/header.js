import { Text, View } from 'react-native';
import style from './headerStyle';

export default function Header(){


    return(
        <View>
            <View style={style.cima}>
                <Text style={style.text}>
                    Site do Sávitinho
                </Text>
            </View>
        </View>
    )
}        



