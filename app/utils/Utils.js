import React from 'react';
import {
    ScrollView,
    RefreshControl,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
} from 'react-native';
import {Component} from 'react';

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}
export default class Utils extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

    App = () => {
        const [refreshing, setRefreshing] = this.state;

        const onRefresh = React.useCallback(() => {
            setRefreshing(true);

            wait(2000).then(() => setRefreshing(false));
        }, []);
        return (
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                    }
                >
                    <Text>Pull down to see RefreshControl indicator</Text>
                </ScrollView>
        );



    }
    render(){
        return(
            <View style={{flex: 1}}>
            {this.App}
            </View>
        );
    }

}

    styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        scrollView: {
            flex: 1,
            backgroundColor: 'pink',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
