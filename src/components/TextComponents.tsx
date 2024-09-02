import { View, Text } from "react-native";
import React from "react";

const TextComponents = () => {

   const username = "West";

   const multiply = (a : number, b: number) => {
      return a * b;
   }

   return (
      <View>
         <Text>My name is {username}</Text>
         <Text>5 * 5 = {multiply(5, 5)}</Text>
      </View>
   );
};

export default TextComponents;
