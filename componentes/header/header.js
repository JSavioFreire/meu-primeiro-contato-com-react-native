import { Text, View } from 'react-native';
import coisa from './headerStyle';


export default function Header(){


    return(
        <View>
            <View style={coisa.cima}>
                <Text style={coisa.text}>
                    Site do Sávitinho
                </Text>
            </View>
        </View>
    )
}        



