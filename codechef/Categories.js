import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Appbar, Card, Drawer } from 'react-native-paper';
import { Fontisto, FontAwesome, MaterialCommunityIcons, AntDesign, Entypo, EvilIcons } from './vectoricon';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Detailspage from './Detailspage';

const subapi = "https://shoppadmin.technodark.in/AppApis/Frontend/api_category_contollers.php?action=fetch_sub_categories&media=appbycworks&catslug=";

const catapi = "https://shoppadmin.technodark.in/AppApis/Frontend/api_category_contollers.php?action=fetch_categories_products&media=appbycworks&catslug=";

const images = 'http://shoppadmin.technodark.in/Images/';

const Categories = ({ navigation, route }) => {
    const slug = route.params.paramslug;
    const subslug = route.params.paramslug;
    const catslug = route.params.paramslug;
    const [dataitem1, setdataitem1] = useState();
    const [dataitem3, setdataitem3] = useState();


    useEffect(() => {
        const apisub = subapi + subslug
        // console.log("subapi=-------->",apisub )
        fetch(apisub)
            .then(response => response.json())
            .then((responseJson) => {
                setdataitem1(responseJson);
                setdataitem1(responseJson.data);


            })
    }, [])


    useEffect(() => {
        const apicat = catapi + slug + "&page=1"
        // console.log("apiurl======>", apicat)
        fetch(apicat)
            .then(response => response.json())
            .then((responseJson) => {
                // console.log('getting data from kavita ideas ', responseJson)
                setdataitem3(responseJson);
                setdataitem3(responseJson.data);

            })
    }, [])




    const subcategory = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => {
                // console.log(" kavita ", dataitem2);
                navigation.navigate('FirstScreen', {
                    paramslug: item.slug,
                })
            }}>

                <View style={{
                    flex: 1, justifyContent: 'center',
                    alignItems: 'center',
                }} >
                    <Card style={{ width: 50, backgroundColor: 'white', shadowColor: 'white', shadowRadius: 5, borderRadius: 50, marginTop: 20, margin: 5, }}>

                        <View style={{ position: 'relative', }}>
                            <Image source={{ uri: images + item.category_image, }} resizeMode="contain" style={{ width: 50, height: 50, borderRadius: 50 }} />

                            <View style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'grey' }}>
                            </View>
                        </View>

                    </Card>
                    <Text style={{ color: 'black', fontSize: 10, textAlign: 'center', fontWeight: '400', marginTop: 10, marginBottom: 10, }}> {item.category_title.slice(0, 7)} </Text>
                </View>
            </TouchableOpacity>
        )
    }



    // redirectslug page for banner
    const bannercategory = ({ item }) => {

        return (

            <TouchableOpacity onPress={() => {
                // console.log(" kavita ", dataitem2);
                navigation.navigate('Detailspage')
            }}  >
                <Card style={{ flex: 1, width: 150, top: 1, height: 190, marginLeft: 17, margin: 8, backgroundColor: '#FCFCFB9', borderRadius: 10, shadowRadius: 5, shadowColor: 'white' }}>
                    <View style={{ position: 'relative', }}>

                        <Image source={{ uri: images + item.imagename, }} style={{ width: 150, height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10, }} />
                        <Text style={{ color: 'black', height: 50, width: 150, margin: 5, fontSize: 12, textAlign: 'left', }}> {item.product_title.slice(0, 25)}..</Text>

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
    return (

        <>
            <StatusBar backgroundColor="pink" />
            <View style={{ flexDirection: 'row', padding: 5, }}>

            </View>

            <ScrollView>
                <FlatList

                    data={dataitem1}
                    horizontal={true}
                    keyExtractor={item => item.id}
                    renderItem={subcategory}

                />

                <FlatList

                    data={dataitem3}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    renderItem={bannercategory}

                />
            </ScrollView>
        </>


    );
}

const styles = StyleSheet.create({})

export default Categories;
