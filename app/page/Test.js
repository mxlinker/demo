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
    TouchableWithoutFeedback} from "react-native";

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state={
            ischeck:false,
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
            <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => this.onNextPress()}>
                    <Text>
                        {'test'}
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
}
