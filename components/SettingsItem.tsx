import {
  View,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import icons from "@/constants/icons";

type settingsItemProps = {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: any;
  showArrow?: boolean;
};

const SettingsItem = ({
  icon,
  onPress,
  title,
  showArrow = true,
  textStyle,
  ...props
}: settingsItemProps) => {
  return (
    <TouchableOpacity
      className="flex flex-row items-center justify-between py-3"
      onPress={onPress}
      {...props}
    >
      <View className="flex flex-row items-center gap-3">
        <Image source={icon} className="size-6" />
        <Text
          className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}
        >
          {title}
        </Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} className="size-5" />}
    </TouchableOpacity>
  );
};

export default SettingsItem;
