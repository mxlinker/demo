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

export default class PickModal extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            ischeck:false,
            type:[1,2,3],
        }
    }
    itemSeparator(){
        return (
            <View style={{backgroundColor:'#111',border:2,height:2,width:500}}/>
        )
    }
    renderItem=({item,index})=>{
       // const {ischeck,}=this.state;
        const items=item;
        console.log(items);
        return(
            <TouchableOpacity style={{flexDirection:'row',padding:10}} onPress={()=>{
                items.ischeck?(items.ischeck=false):(items.ischeck=true)

                let list=[1,2,3];
               // a.push(item.id);
               // console.log(a);
                list.map((item,index)=>{
                   // list.push(item);
                    if(item==items.id ){
                        //  a.indexOf()

                       list.splice(index,1);

                    } else {
                      list.push(items.id);
                    }
                });
                // let set=new Set(a)
                // console.log([...set]+'0');
                this.setState({
                    ischeck:(this.state.ischeck?false:true),
                    //data:this.state.data,
                    type:list,
                })
            }}>
                {console.log(this.state.ischeck+'1')}
                {console.log(items.ischeck+'3')}
                {console.log(this.state.type)}
                <Image  source={items.ischeck?require('../image/icon-check-button.png' ):
                    require('../image/icon-check-button-active.png' )} style={{width:20,height:20}}>
                </Image>
                <Text style={{marginLeft:20,alignSelf:'center'}}>
                    {item.id}
                </Text>
            </TouchableOpacity>
        )
    };
    render(){
        let data=this.props.data;
        let modal=this.props.modal;
        return (
            <Modal
                visible={modal}
                transparent={false}
                animationType="slide"
                onRequestClose={()=>{alert('1')}}
            >
                <View style={{flex:1, alignItems: 'center',
                    justifyContent: 'flex-end',backgroundColor: 'rgba(0, 0, 0, 0.5)',}}>
                    <View  style={{width:400,}}>
                        <View style={{
                            borderTopLeftRadius:15,
                            borderTopRightRadius:15,
                            borderBottomLeftRadius:15 ,
                            borderBottomRightRadius:15 ,
                            backgroundColor: '#FFFFFF',
                        }}>
                            <FlatList
                                data={data}
                                renderItem={this.renderItem}
                                keyExtractor={item => item.id}>
                                ItemSeparatorComponent={this.itemSeparator()}
                            </FlatList>
                            <View style={{height:100}}>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

        );
    }
}
