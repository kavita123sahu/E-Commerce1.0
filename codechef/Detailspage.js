import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, StatusBar, Text } from 'react-native';
import { Button, Card, } from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
// import { FontAwesome, } from './vectoricon';
import { Fontisto, FontAwesome, MaterialCommunityIcons, AntDesign, Entypo } from './vectoricon';
const images = 'http://shoppadmin.technodark.in/Images/';

const apifetch = "https://shoppadmin.technodark.in/AppApis/Frontend/Api_products_controllers.php?action=fetch_product_informations&media=appbycworks&prodtype=Default&prodslug=";

//  const ratingapi ="https://shoppadmin.technodark.in/AppApis/Frontend/Api_products_controllers.php?action=fetch_product_rating&media=appbycworks&productslug=";
 


const Detailspage = ({route}) => {
     const descrition = route.params.paramdescrip;
    
    const [details, setdetails] = useState();
    const [rating, setrating] = useState();
    const [dataitem3, setdataitem3] = useState();
    const [imagecall, setimagecall] = useState();
    const [product_title, setproduct_title] = useState();
    const [product_mrp, setproduct_mrp] = useState();
    const [sellingprice, setsellingprice] = useState();
    const [customer_discount, setcustomer_discount] = useState();
    const [product_rating, setproduct_rating] = useState();
    const [total_rate, settotal_rate] = useState();
    const [min_sale_quantity, setmin_sale_quantity] = useState();

    useEffect(() => {
        const description = apifetch + descrition + "&userslug=kavita";
        console.log("desciption urlllllll->", description);
        fetch(description)
            .then(response => response.json())
            .then((responseJson) => {
                console.log("description ------>", responseJson);

                setdetails(responseJson);
                console.log("status ------>", responseJson.status);
                console.log("status 1------>", details);
                setdetails(responseJson);
                setimagecall(responseJson.images)
                console.log("images ---->", responseJson.images.imagename);
                setproduct_title(responseJson.product_title)
                console.log("product_title ---->", responseJson.product_title);
                setproduct_mrp(responseJson.product_mrp)
                console.log("product_mrp ---->", responseJson.product_mrp);

                setsellingprice(responseJson.sellingprice)
                console.log("sellingprice ---->", responseJson.sellingprice);

                setcustomer_discount(responseJson.customer_discount)
                console.log("customer_discount ---->", responseJson.customer_discount);

                setproduct_rating(responseJson.product_rating)
                console.log("product_rating ---->", responseJson.product_rating);

                settotal_rate(responseJson.total_rate)
                console.log("total_rate ---->", responseJson.total_rate);

                setmin_sale_quantity(responseJson.min_sale_quantity)
                console.log("min_sale_quantity ---->", responseJson.min_sale_quantity);


            })
    }, []);


    // useEffect(() => {
    //    const ratingurl= ratingapi + ratingslug ;
    //    console.log("ratingurl----->",ratingurl);
    //    fetch(ratingurl)
    //         .then(response => response.json())
    //         .then((responseJson) => {
    //             console.log("product code ---->", responseJson)
    //             setrating(responseJson.data);

    //         })

    // }, []);


    // const renderitem3 = ({ item }) => {
    //     return (
    //         <Card style={{ flex: 1, width: 150, top: 10, height: 190, margin: 8, backgroundColor: '#FCFCFB9', borderRadius: 10, shadowRadius: 5, shadowColor: 'white' }}>

    //             <Image source={{ uri: images + item.imagename, }} style={{ width: 150, height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10, }} />
    //             <Text style={{ color: 'black', height: 50, width: 150, margin: 5, fontSize: 12, textAlign: 'left', }}> {item.product_title.slice(0, 25)}...</Text>

    //             <View style={{ flexDirection: 'row' }}>
    //                 <FontAwesome name="rupee" size={10} marginLeft={6} top={3} color="black" />
    //                 <Text style={{ color: 'black', fontWeight: '800', fontSize: 10, }}> {item.product_mrp}</Text>
    //                 <FontAwesome name="rupee" size={10} marginLeft={6} top={3} color="black" fontWeight={400} />
    //                 <Text style={{ color: 'black', fontSize: 10, fontWeight: '400', }}> {item.sellingprice}</Text>
    //                 <Text style={{ color: 'black', fontSize: 10, color: "#5DADE2" }}> {item.customer_discount}</Text>
    //                 <Text style={{ color: "#5DADE2", fontSize: 9, }} > OFF </Text>
    //             </View>
    //         </Card>
    //     )
    // }

    return (



        <ScrollView>
             <Card>


             <TouchableOpacity>

                <Card style={{ flex: 1, width: 350, top: 1, height: 350, margin: 9, borderRadius: 10, shadowRadius: 5, shadowColor: 'black' }}>

                    <Image
                        resizeMode='contain'
                        style={{ width: 350, height: 350, borderRadius: 20, backgroundColor: 'white' }}
                        source={{ uri: images + imagecall }}
                    />

                </Card>
         </TouchableOpacity>  

             <Card style={{ flex: 1, width: 350, height: 150, margin:5, backgroundColor: 'yellow', borderRadius: 10, shadowRadius: 5, shadowColor: 'black',  }}>

                <Text style={{ color: 'black', height: 50, textAlign: 'center', width: 300, margin: 5, fontSize: 12, textAlign: 'left', }}>{product_title}</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', height: 50, width: 50, margin: 5, fontSize: 12, textAlign: 'left', }}> {product_mrp}</Text>
                    <Text style={{ color: 'black', height: 50, width: 50, margin: 5, fontSize: 12, textAlign: 'left', }}> {sellingprice}</Text>
                    <Text style={{ color: 'green', height: 50, width: 50, margin: 5, fontSize: 12, textAlign: 'left', }}> {customer_discount}  </Text>
                    <Text style={{ color: 'green', height: 50, width: 50, margin: 5, fontSize: 12, textAlign: 'left', }}>OFF </Text>
                    </View>
        
                   <View style={{flexDirection:'row'}}>
                   <Text style={{ color: 'white', backgroundColor: 'green', width: 40, height: 20, margin: 5, fontSize: 12, textAlign: 'center', }}>   {product_rating} </Text>
                    <Text style={{ color: 'black', height: 50, width: 50, marginLeft: 18, top: 5, fontSize: 12, }}> {total_rate}</Text>
                        <Text style={{ color: 'black', height: 20, width: 20, marginLeft: 50, top: 5, fontSize: 12, textAlign: 'center', backgroundColor: 'grey' }}> - </Text>
                        <Text style={{ color: 'black', height: 20, width: 20, marginLeft: 50, top: 5, fontSize: 12, textAlign: 'center', backgroundColor: 'grey' }}> {min_sale_quantity}  </Text>
                        <Text style={{ color: 'black', height: 20, width: 20, marginLeft: 50, top: 5, fontSize: 12, textAlign: 'center', backgroundColor: 'grey' }}> +  </Text>
                   </View>
                    
                

            </Card>  




{/* 
             <FlatList
                data={details}
                numColumns={1}
                renderItem={renderitem3}
                keyExtractor={item => item.id}
            /> */}


              {/* <FlatList
                data={rating}
                numColumns={2}
                renderItem={renderitem3}
                keyExtractor={item => item.id}
            /> */}





        </Card>
        </ScrollView>


    );
}

const styles = StyleSheet.create({})

export default Detailspage;
