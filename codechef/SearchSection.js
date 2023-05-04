import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, StatusBar, FlatList } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';
import { EvilIcons, FontAwesome } from './vectoricon';
const images = 'http://shoppadmin.technodark.in/Images/';
const searchapi = 'http://shoppadmin.technodark.in/AppApis/Frontend/api_home_page_contents.php?action=fetch_search_result&media=appbycworks&key=';

const SearchSection = ({ Data, input, setInput }) => {
  const [searchQuery, setSearchQuery] = useState();
  const [filteredDataSource, setFilteredDataSource] = useState();



  // useEffect(() => {

  //   fetch('http://shoppadmin.technodark.in/AppApis/Frontend/api_home_page_contents.php?action=fetch_search_result&media=appbycworks&key=' + {searchQuery})
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       setFilteredDataSource(responseJson.data);
  //     //   setMasterDataSource(responseJson);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  //  const fetc_api=({text})=>{
  //   return (
  //     useEffect(() => {
  //       fetch( searchapi +  text )
  //         .then((response) => response.json())
  //         .then((responseJson) => {
  //  console.log('getting data from fetch', responseJson)
  //           setsearcgapi(responseJson.data);
  //         //   setMasterDataSource(responseJson);
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });
  //     }, [])

  //   )
  //  }
  //  const ItemView = ({item}) => {

  //           return (

  //               <TouchableOpacity >
  //                   <Card style={{ flex: 1, width: 150, top:1, height:190, marginLeft:17, margin:8, backgroundColor: '#F1F1EF', borderRadius: 10, shadowRadius: 10, }}>
  //                       {/* <View >  shadowColor: 'black' */}
  //                       <View style={{ position: 'relative', }}>

  //                       <Image source={{ uri: images + item.image, }} style={{ width: 150,  height: 100,borderTopLeftRadius:10,borderTopRightRadius:10, }} />
  //                       <Text style={{ color: 'black', height: 50, width: 150, margin:5, fontSize:12, textAlign:'left',  }}> {item.product_title.slice(0, 40)}...</Text>

  //                      <View style={{flexDirection:'row'}}>
  //                        <FontAwesome name="rupee" size={10} marginLeft={6} top={3} color="black"  />
  //                        {/* <View style={{borderWidth:1,borderColor:'black' ,flexDirection:'row',}}/>    */}
  //                       <Text style={{ color: 'black', fontWeight:'800', fontSize:10,   }}> {item.product_mrp}</Text>
  //                       {/* <Text style={{textDecorationLine:'underline',borderWidth:2, margin:5,}}> </Text> */}
  //                       <FontAwesome name="rupee" size={10} marginLeft={6} top={3} color="black" fontWeight={400} />
  //                          <Text style={{ color: 'black', fontSize:10,   fontWeight:'400',  }}> {item.sellingprice}</Text>
  //                          <Text style={{ color: 'black', fontSize:10,  color:"#5DADE2" }}> {item.customer_discount}</Text>
  //                          <Text style={{color:"#5DADE2", fontSize:9, }} > OFF </Text>
  //                           </View>


  //                           {/* <View style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'grey' }}>
  //                           </View> */}

  //                       </View>
  //                       {/* </View> */}
  //                   </Card>
  //               </TouchableOpacity>

  //       );
  //     };

  const SearchApi = () => {
    const link = searchapi + searchQuery;
    // console.log("key---------->",link);

    fetch(link)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log("data----------->",responseJson);
        setFilteredDataSource(responseJson.data);

      })
      .catch((error) => {
        console.error(error);
      });
  }
  const searchfile = () => {
    return (
      <TouchableOpacity >
    //   <Card style={{ flex: 1, width: 150, top: 1, height: 190, marginLeft: 17, margin: 8, backgroundColor: '#F1F1EF', borderRadius: 10, shadowRadius: 10, }}>
    //     {/* <View >  shadowColor: 'black' */}
    //     <View style={{ position: 'relative', }}>

    //       <Image source={{ uri: images + item.image, }} style={{ width: 150, height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10, }} />
    //       <Text style={{ color: 'black', height: 50, width: 150, margin: 5, fontSize: 12, textAlign: 'left', }}> {item.product_title.slice(0, 40)}...</Text>

    //       <View style={{ flexDirection: 'row' }}>
    //         <FontAwesome name="rupee" size={10} marginLeft={6} top={3} color="black" />
    //         {/* <View style={{borderWidth:1,borderColor:'black' ,flexDirection:'row',}}/>    */}
    //         <Text style={{ color: 'black', fontWeight: '800', fontSize: 10, }}> {item.product_mrp}</Text>
    //         {/* <Text style={{textDecorationLine:'underline',borderWidth:2, margin:5,}}> </Text> */}
    //         <FontAwesome name="rupee" size={10} marginLeft={6} top={3} color="black" fontWeight={400} />
    //         <Text style={{ color: 'black', fontSize: 10, fontWeight: '400', }}> {item.sellingprice}</Text>
    //         <Text style={{ color: 'black', fontSize: 10, color: "#5DADE2" }}> {item.customer_discount}</Text>
    //         <Text style={{ color: "#5DADE2", fontSize: 9, }} > OFF </Text>
    //       </View>


    //       {/* <View style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'grey' }}>
    //       </View> */}

    //     </View>
    //     {/* </View> */}
    //   </Card>
      </TouchableOpacity>
    )
  }

  return (

    <>
      <StatusBar backgroundColor="orange" />
      <View style={{ flexDirection: 'row', backgroundColor: 'orange', margin: 15, borderRadius: 5, }}>
        <Searchbar
          style={{ width: 300, backgroundColor: 'white' }}
          placeholder="Search"
          value={searchQuery}
          onChangeText={(t) => { setSearchQuery(t) }}
        />
        <TouchableOpacity onPress={() => { SearchApi() }}>
          <EvilIcons name="search" size={30} top={15} color="white" />
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <FlatList
            data={filteredDataSource}
            numColumns={2}
            keyExtractor={(item) => { item.id }}
            renderItem={({ item }) => {
              if (searchQuery === "") {
                return (


                  <TouchableOpacity >
                    <Card style={{ flex: 1, width: 150, top: 1, height: 190, marginLeft: 17, margin: 8, backgroundColor: '#F1F1EF', borderRadius: 10, shadowRadius: 10, }}>
                      <View style={{ position: 'relative', }}>

                        <Image source={{ uri: images + item.image, }} style={{ width: 150, height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10, }} />
                        <Text style={{ color: 'black', height: 50, width: 150, margin: 5, fontSize: 12, textAlign: 'left', }}> {item.product_title.slice(0, 40)}...</Text>

                        <View style={{ flexDirection: 'row' }}>
                          <FontAwesome name="rupee" size={10} marginLeft={6} top={3} color="black" />
                          <Text style={{ color: 'black', fontWeight: '800', fontSize: 10, }}> {item.product_mrp}</Text>
                          <FontAwesome name="rupee" size={10} marginLeft={6} top={3} color="black" fontWeight={400} />
                          <Text style={{ color: 'black', fontSize: 10, fontWeight: '400', }}> {item.sellingprice}</Text>
                          <Text style={{ color: 'black', fontSize: 10, color: "#5DADE2" }}> {item.customer_discount}</Text>
                          <Text style={{ color: "#5DADE2", fontSize: 9, }} > OFF </Text>
                        </View>


                      </View>

                    </Card>
                  </TouchableOpacity>



                )
              }

              if (item.product_title?.toLowerCase().includes(searchQuery?.toLowerCase())) {
                return (


                  <TouchableOpacity >
                    <Card style={{ flex: 1, width: 150, top: 1, height: 190, marginLeft: 17, margin: 8, backgroundColor: '#F1F1EF', borderRadius: 10, shadowRadius: 10, }}>
                      {/* <View >  shadowColor: 'black' */}
                      <View style={{ position: 'relative', }}>

                        <Image source={{ uri: images + item.image, }} style={{ width: 150, height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10, }} />
                        <Text style={{ color: 'black', height: 50, width: 150, margin: 5, fontSize: 12, textAlign: 'left', }}> {item.product_title.slice(0, 40)}...</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <FontAwesome name="rupee" size={10} marginLeft={6} top={3} color="black" />
                          {/* <View style={{borderWidth:1,borderColor:'black' ,flexDirection:'row',}}/>    */}
                          <Text style={{ color: 'black', fontWeight: '800', fontSize: 10, }}> {item.product_mrp}</Text>
                          {/* <Text style={{textDecorationLine:'underline',borderWidth:2, margin:5,}}> </Text> */}
                          <FontAwesome name="rupee" size={10} marginLeft={6} top={3} color="black" fontWeight={400} />
                          <Text style={{ color: 'black', fontSize: 10, fontWeight: '400', }}> {item.sellingprice}</Text>
                          <Text style={{ color: 'black', fontSize: 10, color: "#5DADE2" }}> {item.customer_discount}</Text>
                          <Text style={{ color: "#5DADE2", fontSize: 9, }} > OFF </Text>
                        </View>


                        {/* <View style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'grey' }}>
                      </View> */}

                      </View>
                      {/* </View> */}
                    </Card>
                  </TouchableOpacity>
                  // <FlatList
                  // data={filteredDataSource}
                  // numColumns={2}
                  // keyExtractor= {(item)=> {item.id}}
                  // renderItem={({item})=>{

                  // }}
                  // />


                )
              }
            }}
          />
        </View>
      </SafeAreaView>

    </>


  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

})

export default SearchSection;

