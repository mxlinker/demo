
import 'react-native-gesture-handler';
import React, {Component} from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    StatusBar,
    Platform,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback, Share,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from './Main';
import Me from './Me';
import Space from './Space';

const ICON_S_HOVER = require('../image/home/icon-s-hover.png');
const ICON_Q_HOVER = require('../image/home/icon-q-hover.png');
const ICON_M_HOVER = require('../image/home/icon-m-hover.png');
const ICON_S_DEFAULT = require('../image/home/icon-s-default.png');
const ICON_Q_DEFAULT = require('../image/home/icon-q-default.png');
const ICON_M_DEFAULT = require('../image/home/icon-m-default.png');
const Tab = createBottomTabNavigator();
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            isCheck:false,
            type:[1,2,3],
        }
    }

    onNextPress() {
        this.props.navigation.navigate({
            name:'Main',
            params:'',
        })
    }



    render(){
        return (
                <Tab.Navigator
                    screenOptions={({route}) =>({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if(route.name === 'Main'){
                            iconName = focused ? ICON_M_HOVER : ICON_M_DEFAULT;
                        } else if (route.name === 'Me') {
                            iconName = focused ? ICON_Q_HOVER : ICON_Q_DEFAULT;
                        } else if (route.name === 'Space') {
                            iconName = focused ? ICON_S_HOVER : ICON_S_DEFAULT;
                        }
                        return <Image source={iconName} style={{width: 30,height: 45,marginRight : 10} }/>
                },
                })}
                     tabBarOptions={{
                         activeTintColor: 'blue',
                         inactiveTintColor: 'gray',
                         labelPosition: 'below-icon',
                }}
                      backBehavior= 'none'
                >
                    <Tab.Screen name={'Main'} options={{tabBarBadge: 3}} component={Main}/>
                    <Tab.Screen name={'Me'}  component={Me}/>
                    <Tab.Screen name={'Space'}  component={Space}/>
                </Tab.Navigator>
        );
    }
}
const styles = StyleSheet.create({
    bottomTab: {


    },

})
