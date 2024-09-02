import { View, Text, Image, Button } from "react-native";
import React from "react";

const ImageComponents = () => {
   return (
      <View>
         <Image
            source={{
               uri: "https://i.pinimg.com/564x/5e/08/1f/5e081f1f4b20038250271244f089bb51.jpg",
            }}
            style={{ width: 200, height: 200, borderRadius: 100 }}
         />
         <Text style={{fontSize:15}}>
            My name is West and i love coding.
         </Text>

         <Button title="Press Me"/>

      </View>
   );
};

export default ImageComponents;
