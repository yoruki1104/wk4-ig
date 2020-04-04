import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const HomeDetail =({post,navigation}) => {
    return(
        <View style={styles.cardContainerStyle}>
            <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                <Image
                    style={styles.thumbnailStyle}
                    source={{
                        uri:post.profile
                    }}
                />
                 <Text style={{fontWeight:"bold" ,marginTop:10,marginLeft:10}}>{post.id}</Text>
                <Image 
                    style={styles.moreStyle}
                    source={{
                        uri:"https://github.com/yoruki1104/wk4-ig/blob/master/img/post/btn_more.png?raw=true"
                    }}
                />
            </View>
            <View style={styles.cardSectionStyle}>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri:post.main_img
                    }}
                />
            </View>
            <View style={styles.cardSectionStyle}>
                <Image
                    style={styles.postBarStyle}
                    source={{
                        uri:"https://github.com/yoruki1104/wk4-ig/blob/master/img/post/post_bar.png?raw=true"
                    }}
                />
            </View>
            <Text style={styles.postContentStyle}>{post.like} Likes</Text>
            <Text style={{marginLeft:15,marginRight:15}}>
                <Text style={{fontWeight:"bold"}}>{post.id}</Text>
                {post.content}
                <Text style={{color:"#999999"}}>......read more</Text>
            </Text>
            <Text style={{color:"#999999",marginLeft:15}}>see all {post.comment} comments</Text>
            <View style={styles.commentArea}>
                
                <Image
                    style={styles.commentProfile}
                    source={{
                        uri:"https://github.com/yoruki1104/wk4-ig/blob/master/img/post/img_profile1.png?raw=true"
                    }}
                />
                <Text style={styles.commentReplytxt}>reply......</Text>
                <Image
                    style={styles.commentIcon}
                    source={{
                        uri:"https://github.com/yoruki1104/wk4-ig/blob/master/img/post/post_comment.png?raw=true"
                    }}
                />
               
            </View>
            <Text style={{margin:15,fontSize:10,marginTop:5}}>
                <Text style={{color:"#999999"}}>{post.time} before  • </Text><Text> translate</Text>
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    
    cardContainerStyle:{
        marginTop:10,
        backgroundColor:"#fff",
    },
    thumbnailContainerStyle:{
        flexDirection:"row",
        justifyContent:"flex-start",
    },
    cardSectionStyle:{
        padding:5,
        backgroundColor:"#fff",
    },
    thumbnailStyle:{
        height:40,
        width:40,
        marginLeft:10,
       
    },
    imageStyle:{
        height:350,
        width:350,
    },
    moreStyle:{
        height:20,
        width:20,
      marginTop:10,
        marginLeft:120
      
    },
    postBarStyle:{
        height:52,
        width:350
    },
    postContentStyle:{
        fontWeight:"bold",
        marginLeft:15,
    },
    commentArea:{
        marginLeft:15,
        marginTop:5,
        flexDirection:"row",
        justifyContent:"flex-start"
    },
    commentProfile:{
        height:30,
        width:30,
    },
   
    commentReplytxt:{
       marginLeft:10,
       marginRight:130,
       marginTop:5,
       color:"#999999",
       height:40,
       fontSize:12
      
    },
    commentIcon:{
        height:30,
        width:100,
    }
});

export default HomeDetail;