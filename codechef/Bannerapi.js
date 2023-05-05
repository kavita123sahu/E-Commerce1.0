import React,{useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity,Image,Text} from 'react-native';
import {  Card } from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Fontisto, FontAwesome,  } from './vectoricon';
const images = 'http://shoppadmin.technodark.in/Images/';
const desapi= "https://shoppadmin.technodark.in/AppApis/Frontend/Api_products_controllers.php?action=fetch_product_informations&media=appbycworks&prodtype=Default&prodslug=";

const Allslug= "https://shoppadmin.technodark.in/AppApis/Frontend/Api_products_controllers.php?action=fetch_product_informations&media=appbycworks&prodtype=Default&prodslug="

//  const fourapi = "https://shoppadmin.technodark.in/AppApis/Frontend/Api_products_controllers.php?action=fetch_similer_products&media=appbycworks&prodtitle=";

const Bannerapi = ({route}) => {
const desslug = route.params.paramdescrip;
console.log("desslug--->",desslug);

 const protitle= route.params.paramtitl;
 console.log("protitle--->",protitle);

 const probrnd= route.params.parambrnd;
 console.log("probrnd--->",probrnd);

// const fourslug= route.params.paramfour;
// console.log("fourdata--->",fourslug);

const [yesproduct, setproduct] = useState();


 const [Aboutdata, setAboutdata] = useState();  
 const [details, setdetails] = useState();

 const [product_title, setproduct_title] = useState(); 
 const [product_mrp, setproduct_mrp] = useState();
 const [sellingprice, setsellingprice] = useState();
 const [customer_discount, setcustomer_discount] = useState();
 const [product_rating, setproduct_rating] = useState();
 const [total_rate, settotal_rate] = useState();
 const [min_sale_quantity, setmin_sale_quantity] = useState();


//  useEffect(() => {
//     const desuri=  desapi + desslug +  "&userslug=kavita";
//     console.log("description api ---->",desuri);
//      fetch(desuri)
//      .then(response=> response.json())
//      .then((responsejson) =>{
            
//         console.log("responsejson---->",responsejson)
//         setAboutdata(responsejson)
//         setproduct_title(responsejson.product_title)


//         setAboutdata(responsejson)
//         console.log("product images --->", images +responsejson.images[0].imagename );
//         // setproduct_mrp(responsejson)
//         setproduct_mrp(responsejson.product_mrp)
//         setsellingprice(responsejson.sellingprice)
//         setcustomer_discount(responsejson.customer_discount)
//         setproduct_rating(responsejson.product_rating)

//         console.log("responsejson images------->",images +responsejson.images[0].imagename);

//      })

//  }, []);

//  useEffect(() => {

//     fetch("http://shoppadmin.technodark.in/AppApis/Frontend/api_home_page_contents.php?action=fetch_all_home_banner&media=appbycworks")
//       .then(response => response.json())
//       .then((responseJson) => {

//         setImagedata3(responseJson.imagename)
//         // console.log("---------banner>", responseJson.imagename);

//       })
//   }, [])


 useEffect(() => {

    const allsluguri=  Allslug + desslug +  "&page=1";

    console.log("description api ---->",allsluguri);

     fetch(allsluguri)
     .then(response=> response.json())
     .then((responsejson) =>{
            
        console.log("responsejson---->",responsejson)
        setdetails(responsejson)
        
        setproduct_title(responsejson.product_title)


        setAboutdata(responsejson.images)
        setproduct_mrp(responsejson)
        setproduct_mrp(responsejson.product_mrp)
        setsellingprice(responsejson.sellingprice)
        setcustomer_discount(responsejson.customer_discount)
        setproduct_rating(responsejson.product_rating)

        console.log("responsejson images------->",images+responsejson.images[0].imagename);

     })

 }, []);


//  useEffect(() => {
//    const foururi= fourapi + protitle   +"&prodtype=Default" + "&prodbrand="  + probrnd + "&catslug=" + fourslug 
//    console.log("foururi api kavita sahu ----->",foururi);
//    fetch(foururi)
//       .then(response => response.json())
//       .then((responseJson) => {
//         // let result = responseJson.data.map((o)=>{
//         //     return o.products[0];
//         // })
//         setproduct(responseJson.data);
//         // console.log("product ---->",responseJson.data);

//       })
//   }, [])

const description =()=>{
    return (
        <TouchableOpacity>
        <Card style={{ flex: 1, width: 150, top: 1, height: 190, marginLeft: 17, margin: 8, backgroundColor: '#FCFCFB9', borderRadius: 10, shadowRadius: 5, shadowColor: 'white' }}>
  <View style={{ position: 'relative', }}>

      <Image source={{ uri: images + Aboutdata}} style={{ width: 150, height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10, }} />

      <Text style={{ color: 'black', height: 50, width: 150, margin: 5, fontSize: 12, textAlign: 'left', }}> {product_title}..</Text>

      <View style={{ flexDirection: 'row' }}>
          <FontAwesome name="rupee" size={10} marginLeft={6} top={3} color="black" />
          <Text style={{ color: 'black', fontWeight: '800', fontSize: 10, }}> {product_mrp}</Text>
          <FontAwesome name="rupee" size={10} marginLeft={6} top={3} color="black" fontWeight={400} />
          <Text style={{ color: 'black', fontSize: 10, fontWeight: '400', }}> {sellingprice}</Text>
          <Text style={{ color: 'black', fontSize: 10, color: "#5DADE2" }}> {customer_discount}</Text>
          <Text style={{ color: "#5DADE2", fontSize: 9, }} > OFF </Text>
      </View>
  </View>
</Card>
  </TouchableOpacity>

    )
}

 const ViewallItem = ({ item }) => {
    // const product = item.products;
    return (
      <TouchableOpacity>
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

const descriptionapi=({item})=>{
    console.log("images--->", item)

    return (
        <TouchableOpacity>
              <Card style={{ flex: 1, width: 150, top: 1, height: 190, marginLeft: 17, margin: 8, backgroundColor: '#FCFCFB9', borderRadius: 10, shadowRadius: 5, shadowColor: 'white' }}>
        <View style={{ position: 'relative', }}>

            <Image source={{ uri: images + item.imagename }} style={{ width: 150, height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10, }} />
            <Text style={{ color: 'black', height: 50, width: 150, margin: 5, fontSize: 12, textAlign: 'left', }}> {product_title}..</Text>

            <View style={{ flexDirection: 'row' }}>
                <FontAwesome name="rupee" size={10} marginLeft={6} top={3} color="black" />
                <Text style={{ color: 'black', fontWeight: '800', fontSize: 10, }}> {product_mrp}</Text>
                <FontAwesome name="rupee" size={10} marginLeft={6} top={3} color="black" fontWeight={400} />
                <Text style={{ color: 'black', fontSize: 10, fontWeight: '400', }}> {sellingprice}</Text>
                <Text style={{ color: 'black', fontSize: 10, color: "#5DADE2" }}> {customer_discount}</Text>
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

                data={Aboutdata}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={description}

                />


       
        

         <FlatList

                data={Aboutdata}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={descriptionapi}

         />

  
                <FlatList

                data={yesproduct}
                numColumns={2}
                renderItem={ViewallItem}

                />



              
       </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Bannerapi;
