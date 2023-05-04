import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { Appbar, Card, Drawer } from 'react-native-paper';
import Categories from './Categories';
import Wishlist from './Wishlist';
import Orders from './Orders';
import Allcategory from './Allcategory';
import { useIsFocused } from '@react-navigation/native';
import { FlatList, ScrollView, ImageBackground } from 'react-native-gesture-handler';
import Modal from "react-native-modal";
import Detailspage from './Detailspage';
import Feather from 'react-native-vector-icons/Feather';
import { Fontisto, FontAwesome, MaterialCommunityIcons, AntDesign, Entypo } from './vectoricon';
import Images from './images';
const images = 'http://shoppadmin.technodark.in/Images/';

const apicatall = "https://shoppadmin.technodark.in/AppApis/Frontend/api_home_page_contents.php?action=fetch_special_categories_for_home&media=appbycworks&slug=";
const FirstScreen = ({ navigation, item }) => {

  const [dataitem, setdataitem] = useState();
  const [dataitem2, setdataitem2] = useState();
  const [dataitem3, setdataitem3] = useState();
  const [ALLcateapi, setALLcateapi] = useState();


  const [Imagedata3, setImagedata3] = useState();
  const [iscategoryVisible, setcategoryVisible] = useState(false);

  const isFocused = useIsFocused();
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


  //bannerpage api useeffect 
  useEffect(() => {
    fetch("http://shoppadmin.technodark.in/AppApis/Frontend/api_home_page_contents.php?action=fetch_all_home_banner&media=appbycworks")
      .then(response => response.json())
      .then((responseJson) => {
        // console.log('getting data from fetch', responseJson1)
        setdataitem(responseJson);
        setdataitem(responseJson.data);
        setdatastatus(responseJson.status);
      })
  }, [])


  useEffect(() => {
    fetch("http://shoppadmin.technodark.in/AppApis/Frontend/api_home_page_contents.php?action=fetch_categories_for_home&media=appbycworks")
      .then(response => response.json())
      .then((responseJson1) => {
        // console.log('getting data from fetch', responseJson1)
        setdataitem2(responseJson1);
        setdataitem2(responseJson1.data);
        setdatastatus2(responseJson1.status);

      })
  }, [])

  useEffect(() => {
    fetch("https://shoppadmin.technodark.in/AppApis/Frontend/api_home_page_contents.php?action=fetch_special_categories_for_home&media=appbycworks&page=1")
      .then(response => response.json())
      .then((responseJson) => {
        // let result = responseJson.data.map((o)=>{
        //     return o.products[0];
        // })
        setdataitem3(responseJson.data);

      })
  }, [])


  useEffect(() => {

    fetch("http://shoppadmin.technodark.in/AppApis/Frontend/api_home_page_contents.php?action=fetch_all_home_banner&media=appbycworks")
      .then(response => response.json())
      .then((responseJson) => {

        setImagedata3(responseJson.imagename)
        console.log("---------banner>", responseJson.imagename);

      })
  }, [])



  // banner api function
  const bannerpage = ({ item }) => {

    return (
      <Card style={{ margin: 5, marginTop: 20, width: 300, height: 200, borderRadius: 20 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Categories', {
              paramslug: item.redirectionslug,
            })
          }}>

          <Image
            resizeMode='contain'

            style={{ width: 300, height: 200, borderRadius: 20, }}
            source={{ uri: images + item.imagename }}
          />
        </TouchableOpacity>
      </Card>
    )
  }


  // category menu api calling 
  const renderitem2 = ({ item }) => {

    return (

      <TouchableOpacity onPress={() => {
        // console.log(" kavita ", dataitem2);
        navigation.navigate('Categories', {
          paramslug: item.slug,
        })
      }} >

        <Card style={{ flex: 1, width: 50, margin: 3, backgroundColor: 'white', borderRadius: 10, shadowColor: 'white', shadowRadius: 5, }}>
          <View style={{ position: 'relative', }}>
            <Image source={{ uri: images + item.category_image, }} style={{ width: 50, height: 50, borderRadius: 10, }} />
            <View style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'grey' }}>
            </View>
          </View>
        </Card>

      </TouchableOpacity>


    )
  }

  // four four data shoen data in 4th api flatlist
  const ViewallItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        // console.log(" kavita ", dataitem2);
        navigation.navigate('Categories', {
          paramslug: item.slug,
        })
      }}  >
        <Card style={{ flex: 1, width: 150, top: 1, height: 190, margin: 8, backgroundColor: '#FCFCFB9', borderRadius: 10, shadowRadius: 5, shadowColor: 'white' }}>

          <Image source={{ uri: images + item.imagename, }} style={{ width: 150, height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10, }} />
          <Text style={{ color: 'black', height: 50, width: 150, margin: 5, fontSize: 12, textAlign: 'left', }}> {item.product_title.slice(0, 25)}...</Text>

          <View style={{ flexDirection: 'row' }}>
            <FontAwesome name="rupee" size={10} marginLeft={6} top={3} color="black" />
            <Text style={{ color: 'black', fontWeight: '800', fontSize: 10, }}> {item.product_mrp}</Text>
            <FontAwesome name="rupee" size={10} marginLeft={6} top={3} color="black" fontWeight={400} />
            <Text style={{ color: 'black', fontSize: 10, fontWeight: '400', }}> {item.sellingprice}</Text>
            <Text style={{ color: 'black', fontSize: 10, color: "#5DADE2" }}> {item.customer_discount}</Text>
            <Text style={{ color: "#5DADE2", fontSize: 9, }} > OFF </Text>
          </View>
        </Card>
      </TouchableOpacity>
    )
  }


  // allview all slug third api 
  const renderitem3 = ({ item }) => {
    const product = item.products;
    //  console.log("prodict----->",product);
    return (

      <Card style={{ flexDirection: "row", marginBottom: 15, marginLeft: 15, marginRight: 15, }}>

        <View style={{ flexDirection: "row", margin: 15, }}>

          <Text style={{ color: 'black', fontSize: 12, width: 150, }}> {item.category_title.slice(0, 25)}</Text>


          <TouchableOpacity onPress={() => {
            // console.log(" kavita ", dataitem2);
            navigation.navigate('Categories', {
              paramslug: item.slug,
            })
          }}>
            <Text style={{ color: 'orange', fontWeight: '700', textAlign: 'right', marginLeft: 100, }}> View All</Text>
          </TouchableOpacity>
        </View>

        <FlatList

          data={product}
          numColumns={2}
          renderItem={ViewallItem}

        />


      </Card>



    )
  }

  const showAlert = () =>
    Alert.alert('GPS not connected', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);


  return (

    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="pink" />

      <Modal style={{ marginLeft: 0, marginBottom: 50, marginRight: 0, height: '100%' }} animationIn="slideInLeft" animationOut="slideOutLeft" isVisible={isModalVisible} onBackButtonPress={onModal}>

        {modal == 'ACTION_2' ? <View style={{ flexDirection: 'row' }}>

          <View style={{ height: '100%', backgroundColor: 'white', width: '70%' }}>
            <View style={{ height: '20%', backgroundColor: 'orange', }}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 10, paddingTop: 10 }}></View>
              <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5, }}>
                <View style={{ paddingHorizontal: 5 }}></View>
                <View style={{ flexDirection: 'row' }}>
                  <Fontisto name="person" color={'white'} size={100} height={100} width={100} borderRadius={50} />
                  <View style={{ flexDirection: 'column', width: 130 }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Kavita sahu</Text>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>+91 9179059678</Text>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }} numberOfLines={1}>kavisahu15032001@gmail.com</Text>
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

                <TouchableOpacity onPress={() => { navigation.navigate('FirstScreen') }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14, backgroundColor: '#F1E1C7' }}>
                  <View style={{ width: '20%' }}><MaterialCommunityIcons name="home-variant-outline" color={'orange'} size={30} /></View>
                  <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 15 }}>Home</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                  navigation.navigate('Categories', {
                    paramslug: item.slug,
                  })
                }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
                  <View style={{ width: '20%' }}><Feather name="user" color={'orange'} size={30} /></View>
                  <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 15 }}>Categories</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('Wishlist') }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
                  <View style={{ width: '20%' }}><MaterialCommunityIcons name="logout" color={'orange'} size={30} /></View>
                  <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 15 }}>Wishlist</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('Orders') }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
                  <View style={{ width: '20%' }}><MaterialCommunityIcons name="logout" color={'orange'} size={30} /></View>
                  <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 15 }}>Orders</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
                  <View style={{ width: '20%' }}><AntDesign name="calculator" color={'orange'} size={30} /></View>
                  <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 15 }}>Wallet</Text></View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
                  <View style={{ width: '20%' }}><AntDesign name="file1" color={'orange'} size={30} /></View>
                  <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 15 }}>My Profile</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={showAlert} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14, }}>
                  <View style={{ width: '20%' }}><AntDesign name="calculator" color={'orange'} size={30} /></View>
                  <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 15 }}>Address</Text></View>
                </TouchableOpacity>


                <View style={{ borderWidth: 0.5, borderColor: '#b5b5b5' }}></View>

                <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
                  <View style={{ width: '20%' }}><AntDesign name="calculator" color={'orange'} size={30} /></View>
                  <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 15 }}>Support</Text></View>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', }}/> */}
                {/* <View style={{ marginVertical: 5 }}><Text style={{ color: '#8c8c8c', fontWeight: 'bold' }}>My MEDISHUTTER </Text></View> */}

                <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
                  <View style={{ width: '20%' }}><AntDesign name="file1" color={'orange'} size={30} /></View>
                  <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 15 }}> Privacy  and Policy</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
                  <View style={{ width: '20%' }}><AntDesign name="calculator" color={'orange'} size={30} /></View>
                  <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 15 }}> Be Terms of Use </Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
                  <View style={{ width: '20%' }}><AntDesign name="calculator" color={'orange'} size={30} /></View>
                  <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 15 }}>Rate Us </Text></View>
                </TouchableOpacity>


                <View style={{ borderWidth: 0.5, borderColor: '#b5b5b5' }}></View>


                <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
                  <View style={{ width: '20%' }}><MaterialCommunityIcons name="logout" color={'orange'} size={30} /></View>
                  <View style={{ width: '80%' }}><Text style={{ fontWeight: '500', color: '#000', fontSize: 15 }}>Logout?</Text></View>
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


      <Appbar.Header style={{ backgroundColor: 'pink' }}>
        <Appbar.Action icon="menu" iconColor='white' onPress={() => { setModal('ACTION_2'); setModalVisible(!isModalVisible); }} />
        <Appbar.Content title="FOOD !" titleStyle={{ color: "white", fontWeight: 'bold' }} />
        {/* <TouchableOpacity onPress={() => {navigation.navigate('Searchbar')} }>  */}
        <Appbar.Action icon="magnify" iconColor='white' onPress={() => { navigation.navigate('SearchSection') }} />
        <Appbar.Action icon="dots-vertical" iconColor='white' onPress={() => { showAlert }} />
      </Appbar.Header>


      <ScrollView>
        <FlatList
          horizontal={true}
          data={dataitem}
          renderItem={bannerpage}
          keyExtractor={item => item.id}
        />

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'black', fontWeight: '800', marginLeft: 10, marginTop: 10, fontSize: 15, marginBottom: 15, }}> Category  </Text>


          <TouchableOpacity onPress={() => { navigation.navigate('Allcategory') }} >
            <Text style={{ color: 'orange', fontWeight: '700', margin: 15, textAlign: 'right', marginLeft: 200, marginTop: 10, }} >View All  </Text>
          </TouchableOpacity>
        </View>



        <FlatList
          paddingHorizontal={10}
          numColumns={6}
          data={dataitem2}
          renderItem={renderitem2}
          keyExtractor={item => item.id}
          initialNumToRender={2}

        />
        <Card style={{ margin: 10, borderRadius: 20, marginTop: 30, width: 340, height: 200, marginBottom: 15, }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Detailspage')
          }}>
            <Image
              resizeMode='contain'
              style={{ width: 340, height: 200, borderRadius: 20, backgroundColor: 'white' }}
              source={{ uri: images + Imagedata3 }}
            />
          </TouchableOpacity>
        </Card>



        <FlatList
          data={dataitem3}
          numColumns={1}
          renderItem={renderitem3}
          keyExtractor={item => item.id}
        />

      </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({})

export default FirstScreen;
