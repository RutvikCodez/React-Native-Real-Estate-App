import { View, Text, Image } from "react-native";
import React from "react";



const TabBarIcon = ({ focused, icon, title, ...props }: tabBarIconProps) => {
  return (
    <View className="flex-1 mt-3 flex flex-col items-center gap-1" {...props}>
      <Image
        source={icon}
        tintColor={focused ? "#0061ff" : "#666876"}
        resizeMode="contain"
        className="size-6"
      />
      <Text className={`${focused ? "text-primary-300 font-rubik-medium" : "text-black-200 font-rubik"} text-xs w-full text-center`}>
        {title}
      </Text>
    </View>
  );
};

export default TabBarIcon;
