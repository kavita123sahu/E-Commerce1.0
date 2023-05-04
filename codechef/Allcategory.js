import { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, StatusBar, Image, Text, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Searchbar, Card } from 'react-native-paper';
import { EvilIcons, FontAwesome } from './vectoricon';
const images = 'http://shoppadmin.technodark.in/Images/';

const Allcategory = ({ navigation, route }) => {
  const [AllCat, setAllCat] = useState();
  const [searchQuery, setSearchQuery] = useState();

  useEffect(() => {
    fetch("https://shoppadmin.technodark.in/AppApis/Frontend/api_home_page_contents.php?action=fetch_all_product_categories&media=appbycworks")
      .then(response => response.json())
      .then((responseJson) => {
        // console.log('getting data from jkavita ideas ', a)
        setAllCat(responseJson);
        setAllCat(responseJson.data);

      })
  }, []);



  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity style={{
        flex: 1, justifyContent: 'center',
        alignItems: 'center',
      }} onPress={() => {
        // console.log(" kavita ", dataitem2);
        navigation.navigate('Categories', {
          paramslug: item.slug,
        })
      }} >

        <Card style={{ width: 80, height: 80, backgroundColor: 'white', shadowColor: 'black', shadowRadius: 10, borderRadius: 5, marginTop: 10, margin: 5, }}>

          <View style={{ position: 'relative', margin: 5, }}>
            <Image source={{ uri: images + item.category_image, }} resizeMode="contain" style={{ width: 70, height: 70, }} />

            <View style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'grey' }}>
            </View>
          </View>
        </Card>
        <Text style={{
          color: 'black', fontSize: 12, textAlign: 'center', fontWeight: '400', marginTop: 10,
          height: 30, marginBottom: 10,
        }}> {item.category_title.slice(0, 25)} </Text>


      </TouchableOpacity>
    )
  }
  return (

    <>
      <StatusBar backgroundColor="orange" />
      <View style={{ flexDirection: 'row', backgroundColor: 'orange', margin: 15, borderRadius: 4, }}>
        <Searchbar

          style={{ width: 300, backgroundColor: 'white' }}
          placeholder="Search"
          value={searchQuery}
          onChangeText={(t) => { setSearchQuery(t) }}
        />
        <EvilIcons name="search" size={30} top={15} color="white" />
      </View>

      <FlatList

        numColumns={4}
        data={AllCat}
        renderItem={renderItems}
        keyExtractor={item => item.id}
      />


    </>

  );
}

const styles = StyleSheet.create({})

export default Allcategory;
