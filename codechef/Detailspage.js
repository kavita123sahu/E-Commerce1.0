import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, StatusBar, Text } from 'react-native';
import { Card, } from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { FontAwesome, } from './vectoricon';
const images = 'http://shoppadmin.technodark.in/Images/';

const Detailspage = ({ item }) => {

    const [details, setdetails] = useState();

    useEffect(() => {
        fetch("https://shoppadmin.technodark.in/AppApis/Frontend/api_category_contollers.php?action=fetch_categories_products&media=appbycworks&catslug=eee02e56735b091a1d03714bae71e3b8&page=1")
            .then(response => response.json())
            .then((responseJson) => {
                //       let result = responseJson.data.map((o)=>{
                //       return o.result;
                //   })
                setdetails(responseJson.data);
                console.log('getting data from fetch from api ', responseJson.data);
                // setdetails(responseJson.status);
            })
    }, []);


    const detailscall = ({ item }) => {
        return (

            <TouchableOpacity >
                <Card style={{ flex: 1, width: 150, top: 1, height: 190, marginLeft: 17, margin: 8, backgroundColor: '#FCFCFB9', borderRadius: 10, shadowRadius: 5, shadowColor: 'white' }}>
                    {/* <View >  shadowColor: 'black' */}
                    <View style={{ position: 'relative', }}>

                        <Image source={{ uri: images + item.imagename, }} style={{ width: 150, height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10, }} />
                        <Text style={{ color: 'black', height: 50, width: 150, margin: 5, fontSize: 12, textAlign: 'left', }}> {item.product_title.slice(0, 25)}..</Text>

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
                    </View>

                </Card>
            </TouchableOpacity>
        )
    }
    return (

        <ScrollView>
            <FlatList

                data={details}
                // horizontal={true}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={detailscall}

            />


        </ScrollView>




    );
}

const styles = StyleSheet.create({})

export default Detailspage;
