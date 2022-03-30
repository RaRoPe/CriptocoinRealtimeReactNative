import * as React from 'react'
import {ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

export default class MyButton extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
            animationType: "pulse"
        }
    }

    animatedPress = () => {
        const {screen, navigation} = this.props;
        navigation.navigate(screen, {screen: screen});
        this.setState({
            animationType: 'shake'
        })
    }

    render(){
        const {title, screen, navigation} = this.props

        return (
            <Animatable.View
            animation={this.state.animationType}>
                <Pressable style={styles.mainTheme} onPress={() => this.animatedPress()}>
                    <Text style={styles.textButton}>
                        {`${title}`}
                    </Text>
                </Pressable>
            </Animatable.View>          
        );
    }
}

const styles = StyleSheet.create({
    mainTheme: {
        opacity: 1,
        height: 55,
        backgroundColor: '#c0c2ce',
        marginVertical: 8,
        borderRadius: 15,
        borderBottomWidth: 2,
        borderRightWidth: 3,
        borderBottomColor: 'gray',
        borderRightColor: 'gray',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 18,
        color: '#1e1e1e',
        fontWeight: 'bold'
    }
})