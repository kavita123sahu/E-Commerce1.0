import {useState,useEffect} from 'react';
import {View, StyleSheet,StatusBar, TouchableOpacity, Alert, Text} from 'react-native';
import {  Appbar,} from 'react-native-paper';
import Modal from "react-native-modal";
import { FlatList, ScrollView, ImageBackground } from 'react-native-gesture-handler';
import {useIsFocused } from '@react-navigation/native';
import { Fontisto,Feather,MaterialCommunityIcons,AntDesign, } from './vectoricon';
const Orders = ({navigation}) => {

    const isFocused  = useIsFocused();
    const [modal, setModal] = useState('');
    const [text, setText] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
  
    
    const onModal = () => {
        setModalVisible(!isModalVisible);
        setModal('ACTION_1');
      };
    
    
    
      useEffect(() => {
        setModalVisible(false);
      }, [isFocused]);
    

    return (
        <View>
            <StatusBar backgroundColor="orange"  /> 
            <Modal style={{ marginLeft: 0, marginBottom: 50, marginRight: 0, height: '100%' }} animationIn="slideInLeft" animationOut="slideOutLeft" isVisible={isModalVisible} onBackButtonPress={onModal}>

{modal == 'ACTION_2' ? <View style={{ flexDirection: 'row' }}>

  <View style={{ height: '100%', backgroundColor: 'white', width: '70%' }}>
    <View style={{ height: '20%', backgroundColor: 'orange', }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 10, paddingTop: 10 }}></View>
      <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5, }}>
        <View style={{ paddingHorizontal: 5 }}></View>
        <View style={{flexDirection:'row'}}>
        <Fontisto name="person" color={'white'} size={100} height={100} width={100} borderRadius={50} />
        <View style={{flexDirection:'column', width:150,}}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Kavita sahu</Text>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>+91 9179059678</Text>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>kavisahu15032001@gmail.com</Text>
           {/* <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>+91 9179059678</Text> */}
          </View>
          </View>
          {/* <Entypo name="cross" color={'white'} size={30} height={50} width={50} marginRight={50} bottom={15} borderRadius={50} /> */}
          
          {/* <Appbar.Action icon="cross" iconColor='white' onPress={() => animationOut = "slideOutLeft"} style={{ marginLeft: 10, Top: 20, }} /> */}
         

      </View>
    </View>

    <View style={{ height: '75%', padding: 15 }}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={{ marginVertical: 5 }}><Text style={{ color: '#8c8c8c', fontWeight: 'bold' }}>what are you waiting for?</Text></View>

        <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 , backgroundColor:'#F1E1C7' }}>
          <View style={{ width: '20%' }}><MaterialCommunityIcons name="home-variant-outline" color={'orange'} size={30} /></View>
          <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 17 }}>Home</Text></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('Categories') }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
          <View style={{ width: '20%' }}><Feather name="user" color={'orange'} size={30} /></View>
          <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 17 }}>Categories</Text></View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
          <View style={{ width: '20%' }}><MaterialCommunityIcons name="logout" color={'orange'} size={30} /></View>
          <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 17 }}>Wishlist</Text></View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
          <View style={{ width: '20%' }}><MaterialCommunityIcons name="logout" color={'orange'} size={30} /></View>
          <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 17 }}>Orders</Text></View>
        </TouchableOpacity>

        <View style={{ marginVertical: 5 }}><Text style={{ color: '#8c8c8c', fontWeight: 'bold' }}>Wallet </Text></View>

        <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
          <View style={{ width: '20%' }}><AntDesign name="file1" color={'orange'} size={30} /></View>
          <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 17 }}>My Profile</Text></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
          <View style={{ width: '20%' }}><AntDesign name="calculator" color={'orange'} size={30} /></View>
          <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 17 }}>Address</Text></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
          <View style={{ width: '20%' }}><AntDesign name="calculator" color={'orange'} size={30} /></View>
          <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 17 }}>Profile</Text></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
          <View style={{ width: '20%' }}><AntDesign name="calculator" color={'orange'} size={30} /></View>
          <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 17 }}>My Address</Text></View>
        </TouchableOpacity>

        <View style={{ borderWidth: 0.5, borderColor: '#b5b5b5' }}></View>

        <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
          <View style={{ width: '20%' }}><AntDesign name="calculator" color={'orange'} size={30} /></View>
          <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 17 }}> Support </Text></View>
        </TouchableOpacity>
        {/* <View style={{ marginVertical: 5 }}><Text style={{ color: '#8c8c8c', fontWeight: 'bold' }}>My MEDISHUTTER </Text></View> */}

         <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
           <View style={{ width: '20%' }}><AntDesign name="file1" color={'orange'} size={30} /></View>
       <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 17 }}> Privacy  and Policy</Text></View>
         </TouchableOpacity>

        <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
          <View style={{ width: '20%' }}><AntDesign name="calculator" color={'orange'} size={30} /></View>
          <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 17 }}> Be Terms of Use </Text></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
          <View style={{ width: '20%' }}><AntDesign name="calculator" color={'orange'} size={30} /></View>
          <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 17 }}>Rate Us </Text></View>
        </TouchableOpacity>

      
        <View style={{ borderWidth: 0.5, borderColor: '#b5b5b5' }}></View>

      
        <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
          <View style={{ width: '20%' }}><MaterialCommunityIcons name="logout" color={'orange'} size={30} /></View>
          <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 17 }}>Logout?</Text></View>
        </TouchableOpacity> 
      </ScrollView>
    </View>

    <View style={{ height: '5%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', }}>
      <Text style={{ color: '#fff', fontWeight: 'bold' }}>Designed & Developed Kavita</Text>
    </View>




  </View>


</View>
  : null
}

</Modal>

  
            <AntDesign name="arrowleft" size={25} marginLeft={5}  color="white" onPress={() => { navigation.navigate()}}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Orders;
