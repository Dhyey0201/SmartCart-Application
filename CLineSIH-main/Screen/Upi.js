import { doc, setDoc } from 'firebase/firestore';
import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { uid } from 'uid';
import { store } from '../Firebase/firebase';

export default function Upi(props) {
    const Data=props.route.params.Data;

    const addData=()=>{
        const Id=uid(15);
        setDoc(doc(store,"Payment",Id),{Data:Data}).then(()=>{
            props.navigation.navigate("Qr",{Id:Id});
        })
      }
return (
 <View style={styles.container}>
 <Text style={{fontSize:16,marginBottom:20}}>UPI payment</Text>
    <TextInput
    placeholder="UPI ID"
    style={{height:50,width:"80%",borderWidth:1,borderColor:"rgba(0, 0, 0, 0.12)",paddingHorizontal:2}}

    />
    <TouchableOpacity style={{height:50,width:"80%",backgroundColor:"rgba(21, 84, 246, 1)",justifyContent:"center",alignItems:"center",marginTop:"30%",borderRadius:10}}
    onPress={addData}>
        <Text style={{fontSize:18,color:"white"}}>Proceed</Text>
    </TouchableOpacity>
    <Text style={{fontSize:14,marginTop:10}}>Secure payment with SSL encryption.</Text>
 </View>
  );
}
const styles= StyleSheet.create({
container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
}
});