import * as React from 'react'
import { ImageBackground, View, Text, StyleSheet, Animated, Easing } from 'react-native'
import LottieView from 'lottie-react-native';
import MyButton from '../components/MyButton';

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          progress: new Animated.Value(0),
        };
      }
    
      componentDidMount() {
        Animated.timing(this.state.progress, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start();
      }
    
    render(){
        const {item} = this.props.route.params;
        return (
            <View style={styles.mainView}>
                <ImageBackground color = '#d2d4dc' resizeMode = "cover">
                    <LottieView
                        // ref={animation => {
                        // this.animation = animation;
                        // }}
                        // source={require('../assets/images/lottie/bitcoin_gif.json')}
                        // progress={this.state.progress}
                        // imageAssetsFolder={'images'}
                        // autoPlay loop
                    />
                    
                    <View style={styles.data}>
                        <Text style = {styles.title}>
                            {`Name: ${item.base_asset}`}
                        </Text>
                        <Text style = {styles.subtitle}>
                            {`Price = $${item.price}`}
                        </Text>
                        <Text style = {styles.subtitle}>
                            {`Quote Asset = ${item.quote_asset}`}
                        </Text>

                        {item.change_24h >= 0? (<Text style = {styles.subtitleGreen}>{`Value = ${item.change_24h}`}</Text>): 
                        (<Text style = {styles.subtitleRed}>{`Value = ${item.change_24h}`}</Text>)}

                        <Text style = {styles.subtitle}>
                            {`Value changed in 24h = ${item.updated_at}`}
                        </Text>
                        <Text style = {styles.subtitle}>
                            {`Creation date = ${item.created_at}`}
                        </Text>
                    </View>
                    <MyButton  title={'Home'} screen={'Home'} navigation={this.props.navigation} />
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        marginTop: 64,
        marginLeft: 32,
        marginRight: 32,
    },
    animation: {
        
    },
    data: {
        
        marginBottom: 32,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    subtitle: {
        fontSize: 16,
        alignSelf: 'center',
        alignItems: 'center'
    },
    subtitleGreen: {
        fontSize: 16,
        alignSelf: 'center',
        alignItems: 'center',
        color: 'green'
    },
    subtitleRed: {
        fontSize: 16,
        alignSelf: 'center',
        alignItems: 'center',
        color: 'red'
    },
    buttonView: {
        
        
    },
})