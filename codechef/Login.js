// import React from 'react';
// import {View, StyleSheet, Text} from 'react-native';

// const Login = ({route}) => {
//     const{name,pass} = route.params;
//     return (
//         <View style={{ justifyContent: 'center',alignItems: 'center', padding: 9}}>
//         <Text style={styles.text}> NAME: {name}</Text>
//         <Text style={styles.text}>password: {pass}</Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     text:{marginTop: 20, borderRadius: 10, borderWidth: 1, color: 'black', 
// },


    
// })

// export default Login;

import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import { repeat } from 'react-native-reanimated/lib/types/lib/reanimated2/animation/repeat';

const Login = ({route}) => {
const{Name, Password} = route.params;
    // return (

       if(Name.length==0 || Password.length==0){
        Alert.alert("fetching is mising ");

       }
       else{
        // Alert.alert("Fretch api ");

        var insertedapi= " http://192.168.29.213/project/E-commerApi/Inserted.php";
        var headers = {
            'Accept':'application/json',
            'Content-Type': 'application.json'
        };
        var Data ={
            name: Name,
            pass: Password
        };
          
        fetch(insertedapi,{
            method:'POST',
            headers:headers,
            body:JSON.stringify(Data)
        })
        .then((response)=>response.json())
        .then((response)=>{
            Alert.alert(response[0].Message)
        })
        .catch((error)=>{
            Alert.alert("Error" + error);
        })

       }
    
}

const styles = StyleSheet.create({})

export default Login;
