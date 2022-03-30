import * as React from 'react'
import {ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import MyButton from '../components/MyButton';

const imageURI = '../assets/images/coin.jpg'

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            background: require(imageURI),
        }
    }

    render(){
        return (
            <View style = {styles.mainView}>
                <ImageBackground style = {styles.imageBackground} source = {this.state.background} resizeMode = "cover">
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>
                            {`Final Project`}
                        </Text>
                    </View>

                    <View style={styles.textInputView}>
                        <TextInput style = {styles.textInput} keyboardType='email-address' placeholder={'E-mail'}/>
                        <TextInput style = {styles.textInput} placeholder={'Password'}/>
                        
                    </View>
                    <View style = {styles.loginButtonView}>
                        <MyButton title="Login" screen="Home" navigation={this.props.navigation}/>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    /*For Main page*/
    mainView: {
        //flex: 1,
        height: '100%',
        backgroundColor: '#e7eff6',
    },
    imageBackground: {
        height: '100%',
        opacity: 0.8
    },
    titleView: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 24,
        //color: '#1e1e1e',
        color: 'black',
        fontWeight: 'bold'
    },
    textInputView: {
        flex: 2,
        padding: 32
    },
    textInput: {
        borderColor: '#afafaf',
        backgroundColor: '#f8f8fa',
        borderWidth: 3,
        borderRadius: 15,
        padding: 10,
        marginVertical: 8
    },
    loginButtonView: {
        flex: 1,
        marginLeft: 32,
        marginRight: 32,
    },

    //To test:
    /*
    borderWidth: 2,
    borderColor: 'red',
    */
})