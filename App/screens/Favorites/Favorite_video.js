/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
    ActivityIndicator
} from 'react-native';

import { createBottomTabNavigation, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';

//components
import Button from '../../components/Button/Button';
import appText from '../../src/utils/AppText';
import appColor from '../../src/utils/AppColor';
import { Thumbnail } from 'react-native-thumbnail-video';
import NavBar from '../../components/NavBar/NavBar';
import TabBar from '../../components/TabBar/TabBar';
import FavoriteVideoCard from '../../components/VideoCard/FavoriteVideoCard';

//Screens
import Home from '../Home/Home';
import Login from '../Login/Login';
import NavBarDefault from '../../components/NavBarDefault/NavBarDefault';

class Favorite_video extends React.Component {

    constructor(){
        super();
        this.setState({
            favoriteVideo: [],
            Loading: true
        });
    }

    componentDidMount(){
        this._getFavoriteVideo();
    }

    proceedPlayer = () => {
        this.props.navigation.goBack(null);
        this.props.navigation.navigate('Player');
    }

    _getFavoriteVideo() {
        // const { params } = this.props.navigation.state;
        // this.setState({
        //     howToVideoData: params,
        //     Loading: false
        // });
    }

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    proceedBack() {
        this.props.navigation.goBack(null);
        this.props.navigation.navigate('LoginHome');
    }

    render() {
        const { search,Loading } = this.state;
        return (
            <View style={styles.container}>
                <NavBarDefault name={'Favorite Video'} onPress={() => this.proceedBack()} />
                <ScrollView>
                    <View style={styles.body}>
                        <SearchBar
                            placeholder="Search"
                            onChangeText={this.updateSearch}
                            inputContainerStyle={{ backgroundColor: appColor.white, width: '90%', borderColor: appColor.white }}
                            containerStyle={{ backgroundColor: appColor.white, borderWidth: 0, borderColor: appColor.balck, borderTopWidth: 0, height: 50 }}
                            value={search}
                        />
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                            {Loading ? (
                                <ActivityIndicator size="large" color="#0000ff" />
                            ) : (
                                    // howToVideoData.map((videos, i) => (
                                    //     <FavoriteVideoCard key={i} videos={videos} onPress={() => this.proceedPlayer()} />
                                    // ))
                                    <FavoriteVideoCard onPress={() => this.proceedPlayer()} />
                                )
                            }
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.tabItem} onPress={() => { this.props.navigation.navigate('LoginHome') }}>
                        <Image source={require('../../assets/image/home_s.png')} style={{ width: 40, height: 40 }}></Image>
                        <Text style={{ fontSize: 11 }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} onPress={() => { this.props.navigation.navigate('Favorite_video') }}>
                        <Image source={require('../../assets/image/star_n.png')} style={{ width: 40, height: 40 }}></Image>
                        <Text style={{ fontSize: 12 }}>Favorites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} onPress={() => { this.props.navigation.navigate('RCPManual') }}>
                        <Image source={require('../../assets/image/catalogue_s.png')} style={{ width: 40, height: 40 }}></Image>
                        <Text style={{ fontSize: 11 }}>RCP Ctalogaues</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} onPress={() => { this.props.navigation.navigate('Profile') }}>
                        <Image source={require('../../assets/image/profile_s.png')} style={{ width: 40, height: 40 }}></Image>
                        <Text style={{ fontSize: 11 }}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,

    },
    body: {
        flex: 1
    },
    thumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 150,
        marginHorizontal: 30,
        marginVertical: 10,
        marginTop: '5%'
    },
    title: {
        marginHorizontal: 30,
        fontSize: 15,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0,
        width: '90%',
        marginTop: '2%',
        borderBottomWidth: 2,
    },
    tabBar: {
        height: 70,
        width: '100%',
        elevation: 3,
        flexDirection: 'row',
        backgroundColor: appColor.yellow,
        justifyContent: 'space-around'
    },
    tabItem: {
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default Favorite_video;

