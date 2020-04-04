import React from 'react';
import { StyleSheet,View, TouchableOpacity,Image,ScrollView } from 'react-native';
import headerData from "../json/header.json";


const MessageScreen = ({navigation}) => {
    return(
        
 <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={styles.headerContentStyle}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={{uri: headerData.MessagePage.HeaderLeftUrl}}
                            style={styles.headerLeft}/>
                </TouchableOpacity>
                <Image source={{uri: headerData.MessagePage.HeaderRightUrl}} style={styles.headerRight}/>               
            </View>
            <ScrollView>
            <View  style={{marginTop:-20}}>
                <Image
                    source={{uri: "https://github.com/yoruki1104/wk4-ig/blob/master/img/message/msglist.png?raw=true"}} 
                    style={styles.mesList}
                />
            </View>
            </ScrollView>
            
            <View style={{marginTop:0}}>
                <Image  source={{uri: headerData.MessagePage.bottomImage}} style={styles.bottom}/>
            </View>
        </View>
        
       
    );
};
const styles = StyleSheet.create({
    headerRight:{
        marginTop:10,
        width: 320,
        height: 35
      },
      headerLeft:{
        marginTop:20,
        marginRight: 0,
        marginLeft:20,
        width: 30,
        height: 20
      },
      headerContentStyle:{
        flexDirection:"row",
        justifyContent:"flex-start",
        width:360,
        height:50,
        backgroundColor:'#fafafa',
        marginTop:25,
        elevation:4

    },
    bottom:{
        width: 360,
        height: 45,
      },
    mesList:{
        marginTop:20,
        width:340,
        height:550,
        marginLeft:10,
        marginRight:10,
        
    },
});
export default MessageScreen;