import * as React from 'react'
import {FlatList, View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import { keyExtractor } from 'react-native/Libraries/Lists/VirtualizeUtils';
import MyButton from '../components/MyButton';
import axios, {Axios} from 'axios'
import GetApi from '../services/GetApi'
import CoinsApi from '../services/CoinsApi'

const imageURI = '../assets/images/coin2.jpg'

export default class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            selectedCharacter: {},
            getData: [],
            getCoin: [],
            randomNumber: Math.floor(Math.random()*44),
            background: require(imageURI)
        }
    }

    componentDidMount = () => {
        this.getData()
        this.getCoin()
    }

    goToDetail = (item) => {
        this.props.navigation.navigate('Details', {screen: 'Details', item: item})
    }

    getData = () => {
        const params = {
            page: this.state.randomNumber,
            pageSize: 50
        }
        const link = "/characters?page="+params.page+"&pageSize="+params.pageSize
        GetApi.get(link).then (result => {
            this.setState ({
                getData: result.data
            })
        })
    }

    getCoin = () => {
        CoinsApi.get().then (result => {
            this.setState ({
                getCoin: result.data.markets
            })
            console.log("RESULT=", result.data.markets)
        })
    }

    renderItem = ({item}) => {
        return (
            <View style={styles.listItem}>
                <TouchableOpacity onPress={() => this.goToDetail(item)}>
                    <Text style={styles.listItemContentTitle}>
                        {`Coin: ${item.base_asset}`}
                    </Text>
                    <Text style={styles.listItemContentSubtitle}>
                        {`Price = $${item.price}`}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render(){
        return (
            <ImageBackground style = {styles.imageBackground} source = {this.state.background} resizeMode = "cover">
                <View style={styles.mainView}>
                    <FlatList data={this.state.getCoin} renderItem={item => this.renderItem(item)}/>
                    <MyButton title="Login" screen="Login" navigation={this.props.navigation}/>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: 32,
        marginBottom: 16,
    },
    imageBackground: {
        height: '100%',
        opacity: 0.7
    },
    listItem: {
        height: 70, 
        backgroundColor: '#e5e6eb', 
        margin: 4,
        shadowColor: '#FFFFFF',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        alignItems: 'center',
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 2,
        borderRadius: 5
    },
    listItemContentTitle: {
        fontSize: 18,
        color: 'black', 
        fontWeight: '600',
        fontWeight: 'bold',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 4
    },
    listItemContentSubtitle: {
        fontSize: 14,
        color: 'black', 
        fontWeight: '400',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 4
    },
})