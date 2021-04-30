import React from 'react';
import { StyleSheet, Text, View, Image,Button,FlatList } from 'react-native';

let users =[
    {name:'Vasya', age:45, status:true},
    {name:'Lena', age:433, status:true},
    {name:'Olga', age:3, status:false},
    {name:'Petro', age:18, status:true},
    ];

const User = ()=>{
    return <View >
        <FlatList
            keyExtractor={item => item.name}
            data={users}
            renderItem={({item}) => {
                return <View>
                    <Image style={styles.tinyLogo}
                        source={{uri:'https://ph0.qna.center/storage/photos/morkovkin552267/335878.jpg'}}
                    />
                    <Text style={[styles.box, styles.text]}>{item.name} - {item.age}</Text>
                    <View style={styles.buttView}>
                        <Button onPress={()=>console.log('Button pressed')}
                        title={'My Button'}
                        color={'green'}/>
                    </View>    
                </View>;
            }}
        />
    </View>

}

export default User;

let styles = StyleSheet.create({
    box: {
        height: 70,
        width: '50%',
        marginBottom: 20,
        backgroundColor: 'lightblue'
    },
    text : {
        fontSize: 12
    },
    tinyLogo: {
        width:50,
        height:50
    },
    buttView :{
        height: 20,
        width: '50%',
        marginBottom: 20,
        backgroundColor: 'lightgreen'
    }
});