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
    ScrollView,
    TouchableWithoutFeedback, PixelRatio,
} from 'react-native';

export default class Main extends Component {
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



    render() {
        return (
            <View style={{flex: 1,alignItems: 'center',}}>
                <ScrollView
                    style={styles.bottomTab}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <Image style={styles.bTab}/>
                    <Image style={styles.boTab}/>
                    <Image style={styles.botTab}/>

                </ScrollView >

                <TouchableOpacity onPress={() => this.onNextPress()} style={{flex: 2}}>
                    <Text>
                        {'是我'}
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    bottomTab: {
        // height: PixelRatio.getPixelSizeForLayoutSize(200),
        // width:  PixelRatio.getPixelSizeForLayoutSize(200),
        flex:1,
        height: 200,
        
        backgroundColor: '#d4f1c7',
        marginTop: 20,
    },
    bTab: {
        // height: PixelRatio.getPixelSizeForLayoutSize(200),
        // width:  PixelRatio.getPixelSizeForLayoutSize(200),
        height: 200,
        width: 500,
        backgroundColor: '#569bf1',
        marginTop: 20,
    },
    boTab: {
        // height: PixelRatio.getPixelSizeForLayoutSize(200),
        // width:  PixelRatio.getPixelSizeForLayoutSize(200),
        height: 200,
        width: 500,
        backgroundColor: '#f1606e',
        marginTop: 20,
    },
    botTab: {
        // height: PixelRatio.getPixelSizeForLayoutSize(200),
        // width:  PixelRatio.getPixelSizeForLayoutSize(200),
        height: 200,
        width: 500,
        backgroundColor: '#42f121',
        marginTop: 20,
    },



})
