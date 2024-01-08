import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
export default function Qr({navigation,route}) {
const Id=route.params.Id;

return (
 <View style={styles.container}>
    <QRCode
        value={Id}
    />
    
<Text style={{fontSize:28,marginTop:20,fontWeight:"bold"}}>Payment Successful!</Text>
<TouchableOpacity
  style={{ height: 54,
    marginTop:20,
justifyContent: 'center',
alignItems: 'center'}}
>

<Button
    title="Back to home"

onPress={()=>navigation.navigate("Home")}
/>
</TouchableOpacity>
 </View>
  );
}
const styles= StyleSheet.create({
container: {
    justifyContent:"center",
    alignItems: "center",
    flex:1
}
});