import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {NativeModules} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import set from '@babel/runtime/helpers/esm/set';
import classStaticPrivateFieldSpecGet from '@babel/runtime/helpers/esm/classStaticPrivateFieldSpecGet';
import PickModal from './app/utils/Common';
import Home from './app/page/Home'
import Main from './app/page/Main';
import {
    Text,
    View,
} from 'react-native';

const Stack = createStackNavigator();
export default class App extends Component {
  constructor(props) {
    super(props);

    };



    componentDidMount() {

    }
    componentWillUnmount(){

    }

  render() {

    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName={'Home'}
                             screenOptions={{
                                 // 添加这一行会实现安卓下页面的左右切换，默认是从下到上
                                 cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                             }}>
                <Stack.Screen name={'Home'} options={{headerShown: false}} component={Home}/>
                <Stack.Screen name={'Main'} options={{headerShown: false}} component={Main}/>
            </Stack.Navigator>
        </NavigationContainer>
        // <View>
        //     <Text>
        //         {'asdas'}
        //     </Text>
        // </View>
    );
  }

}
